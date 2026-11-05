import argparse
from pathlib import Path

import numpy as np


DEFAULT_SEED = 2004
GRID_X = 320
GRID_Y = 260
POINT_COLOR = np.array([37, 99, 235], dtype=np.uint8)
OUTPUT_FILE = Path("./public/assets/island.ply")


def hash2(ix, iy, seed):
    """Deterministic lattice values for any integer coordinate and seed."""
    value = np.sin(
        ix * 127.1 + iy * 311.7 + seed * 74.7
    ) * 43758.5453123
    return value - np.floor(value)


def smoothstep(value):
    return value * value * (3.0 - 2.0 * value)


def value_noise(x, y, seed):
    x0 = np.floor(x).astype(np.int64)
    y0 = np.floor(y).astype(np.int64)
    tx = smoothstep(x - x0)
    ty = smoothstep(y - y0)

    a = hash2(x0, y0, seed)
    b = hash2(x0 + 1, y0, seed)
    c = hash2(x0, y0 + 1, seed)
    d = hash2(x0 + 1, y0 + 1, seed)

    ab = a + (b - a) * tx
    cd = c + (d - c) * tx

    return (ab + (cd - ab) * ty) * 2.0 - 1.0


def fbm(x, y, seed, octaves=5):
    value = np.zeros_like(x, dtype=np.float64)
    amplitude = 0.5
    frequency = 1.0
    normalization = 0.0

    for octave in range(octaves):
        value += amplitude * value_noise(
            x * frequency,
            y * frequency,
            seed + octave * 101,
        )
        normalization += amplitude
        amplitude *= 0.5
        frequency *= 2.0

    return value / normalization


def island_profile(x, y, seed):
    theta = np.arctan2(y, x)
    boundary = 0.82 + 0.14 * fbm(
        np.cos(theta) * 1.7,
        np.sin(theta) * 1.7,
        seed + 17,
    )

    warped_radius = np.hypot(x, y) + 0.08 * fbm(
        x * 1.4,
        y * 1.4,
        seed + 29,
    )

    q = warped_radius / boundary
    t = np.clip((q - 0.70) / 0.30, 0.0, 1.0)
    return q, 1.0 - smoothstep(t)


def island_mask(x, y, seed):
    return island_profile(x, y, seed)[1]


def terrain_height(x, y, seed):
    q, mask = island_profile(x, y, seed)
    interior_slope = np.power(np.clip(1.0 - q, 0.0, 1.0), 0.65)
    broad = 0.5 + 0.5 * fbm(x * 1.1, y * 1.1, seed)
    ridges = np.power(
        1.0 - np.abs(fbm(x * 2.4, y * 2.4, seed + 53)),
        1.7,
    )
    detail = fbm(x * 5.0, y * 5.0, seed + 89)

    return mask * (
        0.025 +
        0.16 * interior_slope +
        0.22 * interior_slope * broad +
        0.18 * interior_slope * ridges +
        0.03 * interior_slope * detail
    )


def generate_point_cloud(seed, grid_x=GRID_X, grid_y=GRID_Y):
    rng = np.random.default_rng(seed)
    x_lin = np.linspace(-1.15, 1.15, grid_x)
    y_lin = np.linspace(-1.15, 1.15, grid_y)
    x_grid, y_grid = np.meshgrid(x_lin, y_lin)

    dx = x_lin[1] - x_lin[0]
    dy = y_lin[1] - y_lin[0]
    x_grid += rng.uniform(-0.22 * dx, 0.22 * dx, x_grid.shape)
    y_grid += rng.uniform(-0.22 * dy, 0.22 * dy, y_grid.shape)

    x = x_grid.ravel()
    y = y_grid.ravel()
    mask = island_mask(x, y, seed)

    inside = mask >= 0.04
    x = x[inside]
    y = y[inside]
    mask = mask[inside]
    z = terrain_height(x, y, seed)

    points = np.column_stack((x, z, y))
    points[:, 0] -= points[:, 0].mean()
    points[:, 1] -= points[:, 1].min()
    points[:, 2] -= points[:, 2].mean()

    extent = np.max(np.linalg.norm(points[:, [0, 2]], axis=1))
    points[:, [0, 2]] /= extent
    points[:, 1] /= extent

    normalized_height = np.clip(points[:, 1] / 0.75, 0.0, 1.0)
    colors = np.zeros((len(points), 3), dtype=np.uint8)
    colors[:, 0] = (158 + 97 * normalized_height).astype(np.uint8)
    colors[:, 1] = (203 + 52 * normalized_height).astype(np.uint8)
    colors[:, 2] = 255

    return points, colors


def main():
    import pyvista as pv

    parser = argparse.ArgumentParser(description="Generate a seeded island point cloud.")
    parser.add_argument("--seed", type=int, default=DEFAULT_SEED)
    parser.add_argument("--output", type=Path, default=OUTPUT_FILE)
    args = parser.parse_args()

    points, colors = generate_point_cloud(args.seed)
    cloud = pv.PolyData(points)
    cloud.point_data["RGB"] = colors
    args.output.parent.mkdir(parents=True, exist_ok=True)
    cloud.save(args.output, binary=True, texture="RGB")

    print(f"Wrote {len(points)} points to {args.output} using seed {args.seed}")


if __name__ == "__main__":
    main()
