import * as THREE from "three";

const container = document.getElementById("point-cloud-background");

function hash2(ix, iz, seed) {
    let hash =
        Math.imul(ix, 374761393) ^
        Math.imul(iz, 668265263) ^
        Math.imul(seed, 1442695041);

    hash = Math.imul(hash ^ (hash >>> 13), 1274126177);
    return ((hash ^ (hash >>> 16)) >>> 0) / 4294967295;
}

function smoothstep(value, edge0, edge1) {
    const t = THREE.MathUtils.clamp(
        (value - edge0) / (edge1 - edge0),
        0,
        1
    );

    return t * t * (3 - 2 * t);
}

function valueNoise2D(x, z, seed) {
    const x0 = Math.floor(x);
    const z0 = Math.floor(z);
    const tx = smoothstep(x - x0, 0, 1);
    const tz = smoothstep(z - z0, 0, 1);

    const a = hash2(x0, z0, seed);
    const b = hash2(x0 + 1, z0, seed);
    const c = hash2(x0, z0 + 1, seed);
    const d = hash2(x0 + 1, z0 + 1, seed);

    const ab = THREE.MathUtils.lerp(a, b, tx);
    const cd = THREE.MathUtils.lerp(c, d, tx);

    return THREE.MathUtils.lerp(ab, cd, tz) * 2 - 1;
}

function fbm(x, z, seed) {
    let value = 0;
    let amplitude = 0.5;
    let frequency = 1;
    let normalization = 0;

    for (let octave = 0; octave < 5; octave += 1) {
        value += amplitude * valueNoise2D(
            x * frequency,
            z * frequency,
            seed + octave * 101
        );

        normalization += amplitude;
        amplitude *= 0.5;
        frequency *= 2;
    }

    return value / normalization;
}

function islandProfile(x, z, seed) {
    const theta = Math.atan2(z, x);
    const boundary =
        0.82 +
        0.14 * fbm(
            Math.cos(theta) * 1.7,
            Math.sin(theta) * 1.7,
            seed + 17
        );

    const warpedRadius =
        Math.hypot(x, z) +
        0.08 * fbm(x * 1.4, z * 1.4, seed + 29);

    const q = warpedRadius / boundary;

    return {
        q,
        mask: 1 - smoothstep(q, 0.70, 1.0)
    };
}

function islandMask(x, z, seed) {
    return islandProfile(x, z, seed).mask;
}

function terrainHeight(x, z, seed) {
    const { q, mask } = islandProfile(x, z, seed);
    const interiorSlope = Math.pow(
        THREE.MathUtils.clamp(1 - q, 0, 1),
        0.65
    );
    const broadTerrain = 0.5 + 0.5 * fbm(x * 1.1, z * 1.1, seed);
    const ridges = Math.pow(
        1 - Math.abs(fbm(x * 2.4, z * 2.4, seed + 53)),
        1.7
    );
    const detail = fbm(x * 5.0, z * 5.0, seed + 89);

    return mask * (
        0.025 +
        0.16 * interiorSlope +
        0.22 * interiorSlope * broadTerrain +
        0.18 * interiorSlope * ridges +
        0.03 * interiorSlope * detail
    );
}

function createIslandGeometry(seed, targetPoints) {
    const points = [];
    const colors = [];
    const resolution = Math.ceil(Math.sqrt(targetPoints / 0.55));

    for (let iz = 0; iz < resolution; iz += 1) {
        for (let ix = 0; ix < resolution; ix += 1) {
            const jitterX = (hash2(ix, iz, seed + 101) - 0.5) / resolution;
            const jitterZ = (hash2(ix, iz, seed + 131) - 0.5) / resolution;
            const x = ((ix + jitterX) / resolution - 0.5) * 2.2;
            const z = ((iz + jitterZ) / resolution - 0.5) * 2.2;
            const mask = islandMask(x, z, seed);

            if (mask < 0.04) {
                continue;
            }

            const density = 0.25 + 0.75 * Math.min(mask, 1);

            if (hash2(ix, iz, seed + 157) > density) {
                continue;
            }

            const height = terrainHeight(x, z, seed);
            const normalizedHeight = THREE.MathUtils.clamp(height / 0.75, 0, 1);
            const color = new THREE.Color().lerpColors(
                new THREE.Color(0x9ecbff),
                new THREE.Color(0xffffff),
                normalizedHeight
            );

            points.push(x, height, z);
            colors.push(color.r, color.g, color.b);
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(points, 3)
    );
    geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
    );
    geometry.computeBoundingSphere();

    return geometry;
}

function parseSeed() {
    const seedParameter = new URLSearchParams(window.location.search).get("seed");
    const value = Number.parseInt(seedParameter, 10);

    if (Number.isFinite(value)) {
        return Math.abs(value) % 2147483647 || 2004;
    }

    if (window.crypto?.getRandomValues) {
        const randomValues = new Uint32Array(1);
        window.crypto.getRandomValues(randomValues);
        return randomValues[0] % 2147483647 || 2004;
    }

    return Date.now() % 2147483647 || 2004;
}

function initialize(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        52,
        window.innerWidth / window.innerHeight,
        0.01,
        100
    );

    camera.position.set(0, 0.95, 2.8);
    camera.lookAt(0, 0.15, 0);

    let renderer;

    try {
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "low-power"
        });
    } catch (error) {
        console.warn("Point-cloud visualization unavailable:", error);
        container.remove();
        return;
    }

    const mobile = window.innerWidth < 700;
    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, mobile ? 1 : 1.5)
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    let pointCloud;
    const currentSeed = parseSeed();

    function replaceIsland(seed) {
        if (pointCloud) {
            scene.remove(pointCloud);
            pointCloud.geometry.dispose();
            pointCloud.material.dispose();
        }

        const geometry = createIslandGeometry(
            seed,
            window.innerWidth < 700 ? 8000 : 18000
        );

        const material = new THREE.PointsMaterial({
            size: window.innerWidth < 700 ? 0.025 : 0.018,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.78,
            vertexColors: true,
            depthWrite: false
        });

        pointCloud = new THREE.Points(geometry, material);
        const mobile = window.innerWidth < 700;
        pointCloud.scale.set(
            mobile ? 1.3 : 1.5,
            mobile ? 1.15 : 1.25,
            mobile ? 1.3 : 1.5
        );
        scene.add(pointCloud);
    }

    replaceIsland(currentSeed);

    function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    let frameId = 0;

    function render() {
        if (document.hidden) {
            frameId = 0;
            return;
        }

        if (
            pointCloud &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            pointCloud.rotation.y += 0.0003;
        }

        renderer.render(scene, camera);
        frameId = requestAnimationFrame(render);
    }

    function resumeRendering() {
        if (!document.hidden && frameId === 0) {
            frameId = requestAnimationFrame(render);
        }
    }

    function pauseRendering() {
        if (frameId !== 0) {
            cancelAnimationFrame(frameId);
            frameId = 0;
        }
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            pauseRendering();
        } else {
            resumeRendering();
        }
    });

    resumeRendering();
}

if (container) {
    initialize(container);
}
