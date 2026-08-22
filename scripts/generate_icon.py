
from pathlib import Path

# Colors
PRIMARY = '#F8FAFC'
SIZE = 512
RADIUS = 32

def build_svg():
    nodes = {
        # Face outline
        't':   (256, 70,  RADIUS, PRIMARY),
        'tr1': (350, 98,  RADIUS, PRIMARY),
        'tr2': (420, 180, RADIUS, PRIMARY),
        'r':   (438, 280, RADIUS, PRIMARY),
        'br':  (390, 380, RADIUS, PRIMARY),
        'b':   (256, 430, RADIUS, PRIMARY),
        'bl':  (122, 380, RADIUS, PRIMARY),
        'l':   (74,  280, RADIUS, PRIMARY),
        'tl2': (92,  180, RADIUS, PRIMARY),
        'tl1': (162, 98,  RADIUS, PRIMARY),

        # Eyes
        'eye_l': (190, 220, RADIUS * 0.85, PRIMARY),
        'eye_r': (322, 220, RADIUS * 0.85, PRIMARY),

        # Smile
        'smile_l':  (165, 305, RADIUS * 0.6, PRIMARY),
        'smile_l2': (205, 340, RADIUS * 0.6, PRIMARY),
        'smile_c':  (256, 355, RADIUS * 0.6, PRIMARY),
        'smile_r2': (307, 340, RADIUS * 0.6, PRIMARY),
        'smile_r':  (347, 305, RADIUS * 0.6, PRIMARY),
    }

    edges = [
        # Face outline
        ('t', 'tr1'),
        ('tr1', 'tr2'),
        ('tr2', 'r'),
        ('r', 'br'),
        ('br', 'b'),
        ('b', 'bl'),
        ('bl', 'l'),
        ('l', 'tl2'),
        ('tl2', 'tl1'),
        ('tl1', 't'),

        # Smile
        ('smile_l', 'smile_l2'),
        ('smile_l2', 'smile_c'),
        ('smile_c', 'smile_r2'),
        ('smile_r2', 'smile_r'),
    ]


    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{SIZE}" height="{SIZE}" viewBox="0 0 {SIZE} {SIZE}">',
        '<defs>',
        '  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">',
        '    <feGaussianBlur stdDeviation="8" result="blur"/>',
        '    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>',
        '  </filter>',
        '</defs>',
        f'<rect width="100%" height="100%" fill="none"/>',
    ]

    def line(a, b, stroke=PRIMARY, width=22, opacity=0.2):
        x1, y1 = nodes[a][0], nodes[a][1]
        x2, y2 = nodes[b][0], nodes[b][1]
        return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{stroke}" stroke-width="{width}" stroke-linecap="round" opacity="{opacity}"/>'

    for a,b in edges:
        parts.append(line(a,b))

    for (x,y,r,color) in nodes.values():
        parts.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{color}"/>')

    parts.append('</svg>')
    return '\n'.join(parts)


if __name__ == '__main__':
    svg = build_svg()
    svg_path = Path('./public/favicon.svg')
    svg_path.write_text(svg, encoding='utf-8')