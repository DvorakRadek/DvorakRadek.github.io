export type Coordinates = {
  row: number,
  col: number,
  level: number,
}

export type Move = {
  player: Player,
  coordinates: Coordinates,
}

export type Player = 'x' | 'o';