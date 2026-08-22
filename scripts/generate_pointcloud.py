import numpy as np
import pyvista as pv

SEED = 2004

GRID_X = 320
GRID_Y = 260

ISLAND_RADIUS = 1.0
MAX_HEIGHT = 0.8
COAST_WIDTH = 0.05

POINT_COLOR = np.array([37, 99, 235], dtype=np.uint8)

OUTPUT_FILE = "./public/assets/island.ply"

rng = np.random.default_rng(SEED)

# Coastline
def island_radius(theta):
    radius = ISLAND_RADIUS
    radius += 0.13 * np.sin(3.0 * theta + 0.7)
    radius += 0.07 * np.sin(5.0 * theta - 1.3)
    radius += 0.04 * np.sin(8.0 * theta + 2.0)
    return radius

def warp_coordinates(x, y):
    warp_x = 0.08 * np.sin(2.3 * y + 0.7 * np.sin(3.0 * x))
    warp_y = 0.08 * np.sin(2.0 * x - 0.5 * np.sin(2.7 * y))
    return x + warp_x, y + warp_y

def normalized_radius(x, y):
    xw, yw = warp_coordinates(x, y)

    theta = np.arctan2(yw, xw)
    r = np.sqrt(xw**2 + yw**2)

    boundary = island_radius(theta)

    return r / boundary


# Moutains 
def base_falloff(q):
    return np.maximum(0.0, 1.0 - q**1.5) ** 2

def gaussian_mountain(x, y, cx, cy, sx, sy, amplitude):
    dx = (x - cx) / sx
    dy = (y - cy) / sy

    return amplitude * np.exp(-0.5 * (dx**2 + dy**2))

def ridge_axis(x):
    return (
        0.14 * np.sin(1.9 * x - 0.3)
        - 0.18 * x
        + 0.025 * np.sin(6.0 * x + 0.4)
        + 0.03
    )

def branch_axis(x):
    return ridge_axis(x) - 0.14 * np.exp(-((x - 0.02) / 0.42) ** 2) - 0.03

def terrain_noise(x, y):
    n1 = np.sin(2.1 * x + 1.5 * y + 0.7 * np.sin(2.3 * y))
    n2 = np.sin(4.2 * x - 3.4 * y + 1.0 * np.sin(1.8 * x))
    n3 = np.sin(8.0 * x + 6.2 * y + 1.1 * np.sin(2.6 * x - 1.2 * y))

    return (
        1.00 * n1
        + 0.45 * n2
        + 0.18 * n3
    ) / 1.63

def height_function(x, y):
    q = normalized_radius(x, y)

    falloff = base_falloff(q)

    base = 0.48 * falloff

    axis0 = ridge_axis(x)
    axis1 = branch_axis(x)

    width0 = 0.11 + 0.02 * np.cos(2.2 * x)
    width1 = 0.08 + 0.015 * np.sin(2.7 * x + 0.8)

    d0 = (y - axis0) / width0
    d1 = (y - axis1) / width1

    main_ridge = np.exp(-0.5 * d0**2)
    branch_ridge = 0.55 * np.exp(-0.5 * d1**2) * np.exp(-((x - 0.02) / 0.55) ** 2)

    p1 = gaussian_mountain(x, y, -0.30, ridge_axis(-0.30) + 0.02, 0.11, 0.08, 0.18)
    p2 = gaussian_mountain(x, y, -0.08, ridge_axis(-0.08) + 0.03, 0.12, 0.09, 0.26)
    p3 = gaussian_mountain(x, y, 0.16, ridge_axis(0.16) + 0.02, 0.10, 0.08, 0.20)
    p4 = gaussian_mountain(x, y, 0.34, ridge_axis(0.34) + 0.00, 0.12, 0.08, 0.13)

    broad_noise = terrain_noise(0.9 * x, 0.9 * y)
    detail_noise = terrain_noise(1.7 * x, 1.7 * y)

    slope_ribs = (1.0 - np.abs(np.sin(16.0 * (y - axis0) + 3.0 * x + 0.4 * np.sin(4.0 * x)))) ** 2
    slope_ribs *= np.clip(main_ridge * 1.8, 0.0, 1.0)

    relief = (
        0.34 * main_ridge
        + 0.18 * branch_ridge
        + p1 + p2 + p3 + p4
        + 0.05 * broad_noise
        + 0.025 * detail_noise
        + 0.04 * slope_ribs
    )

    z = MAX_HEIGHT * (base + falloff * relief)

    coastal_softening = 0.07 * np.exp(-((q - 0.94) / 0.10) ** 2)
    z = np.maximum(0.0, z - coastal_softening * MAX_HEIGHT)

    return z


x_lin = np.linspace(-1.15, 1.15, GRID_X)
y_lin = np.linspace(-1.15, 1.15, GRID_Y)

X, Y = np.meshgrid(x_lin, y_lin)

dx = x_lin[1] - x_lin[0]
dy = y_lin[1] - y_lin[0]

X = X + rng.uniform(-0.22 * dx, 0.22 * dx, X.shape)
Y = Y + rng.uniform(-0.22 * dy, 0.22 * dy, Y.shape)

x = X.ravel()
y = Y.ravel()

q = normalized_radius(x, y)
inside = q <= 1.0

x = x[inside]
y = y[inside]

z = height_function(x, y)

points = np.column_stack((x, y, z))

points[:, 0] -= points[:, 0].mean()
points[:, 1] -= points[:, 1].mean()
points[:, 2] -= points[:, 2].min()

extent = np.max(np.linalg.norm(points[:, :2], axis=1))
points[:, :2] /= extent
points[:, 2] /= extent

colors = np.tile(POINT_COLOR, (len(points), 1))

cloud = pv.PolyData(points)
cloud.point_data["RGB"] = colors

plotter = pv.Plotter()

plotter.add_points(
    cloud,
    scalars="RGB",
    rgb=True,
    point_size=2,
    render_points_as_spheres=True
)

plotter.show_axes()
plotter.show()

cloud.save(
    OUTPUT_FILE,
    binary=True,
    texture="RGB"
)