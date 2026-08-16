import * as THREE from "three";
import { PLYLoader } from "three/addons/loaders/PLYLoader.js";


const container = document.getElementById("point-cloud-background");

// 3D stuff
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
);
camera.position.set(0, 0, 3);

// Rendering to the web
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setClearColor(0x000000, 0);

container.appendChild(renderer.domElement);


// Loading the actual point cloud
const loader = new PLYLoader();

let pointCloud;

loader.load(
    "./assets/fragment.ply",

    (geometry) => {

        console.log("PLY loaded");
        console.log(geometry);

        // Center point cloud around (0, 0, 0)
        geometry.center();


        // Material for each point
        const material = new THREE.PointsMaterial({
            color: 0x2563eb,
            size: 0.015,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.25
        });


        // Geometry + material = point cloud
        pointCloud = new THREE.Points(
            geometry,
            material
        );


        // Adjust orientation if necessary
        pointCloud.rotation.x = -Math.PI / 2;


        // Scale it
        pointCloud.scale.setScalar(4);


        scene.add(pointCloud);
    },

    // Loading progress
    (xhr) => {
        if (xhr.total) {
            const percent = xhr.loaded / xhr.total * 100;

            console.log(`${percent.toFixed(1)}% loaded`);
        }
    },

    // Error
    (error) => {
        console.error("Could not load PLY:", error);
    }
);


// Animate :D
function animate() {

    requestAnimationFrame(animate);


    if (pointCloud) {

        pointCloud.rotation.z += 0.0003;
    }


    renderer.render(
        scene,
        camera
    );
}


animate();


// Utility stuff
window.addEventListener("resize", () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});