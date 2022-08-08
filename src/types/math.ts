export type Point = {
  x: number,
  y: number
};

export type MovingPoint = Point & {
  vx: number,
  vy: number
};