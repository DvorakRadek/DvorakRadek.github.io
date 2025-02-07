export type Coordinates = {
  row: number,
  col: number,
  level: number,
}

export type Move = {
  player: 'x' | 'o',
  coordinates: Coordinates,
}

export type Player = 'x' | 'o';