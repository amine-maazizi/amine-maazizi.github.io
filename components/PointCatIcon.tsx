import React from 'react';

const points = [
  // Ears and the open, lightly connected top of the head.
  [8, 10], [9.5, 8], [11, 6.8], [12.5, 8.2], [13.5, 10.2],
  [26.5, 10.2], [27.5, 8.2], [29, 6.8], [30.5, 8], [32, 10],
  [14.5, 8.8], [16.5, 7.9], [18.7, 7.4], [21.3, 7.4], [23.5, 7.9], [25.5, 8.8],
  // Three-point sleepy eyes.
  [13.6, 15.2], [14.9, 14.8], [16.2, 15.2],
  [23.8, 15.2], [25.1, 14.8], [26.4, 15.2],
  // Dotted wedge nose and minimal muzzle.
  [19.1, 19.2], [20.9, 19.2], [20, 20.6], [19.5, 19.9], [20.5, 19.9],
  [20, 22], [18.7, 22.8], [17.7, 23.8], [21.3, 22.8], [22.3, 23.8],
  [18.6, 25], [21.4, 25],
  // Delicate dotted whiskers.
  [15.8, 22.2], [13.2, 21.2], [10.7, 20.4], [8.1, 19.6],
  [15.5, 23.4], [13, 23.4], [10.5, 23.4], [8, 23.4],
  [15.8, 25.2], [13.2, 26], [10.7, 26.8], [8.2, 27.7],
  [24.2, 22.2], [26.8, 21.2], [29.3, 20.4], [31.9, 19.6],
  [24.5, 23.4], [27, 23.4], [29.5, 23.4], [32, 23.4],
  [24.2, 25.2], [26.8, 26], [29.3, 26.8], [31.8, 27.7],
  [18.8, 27.8], [20, 28.4], [21.2, 27.8],
];

const PointCatIcon: React.FC<{ className?: string; title?: string }> = ({
  className = 'h-5 w-5',
  title,
}) => (
  <svg
    viewBox="6 5 28 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={title ? undefined : true}
    role={title ? 'img' : undefined}
  >
    {title && <title>{title}</title>}
    {points.map(([cx, cy], index) => (
      <circle key={`${cx}-${cy}-${index}`} cx={cx} cy={cy} r="0.82" fill="currentColor" />
    ))}
  </svg>
);

export default PointCatIcon;
