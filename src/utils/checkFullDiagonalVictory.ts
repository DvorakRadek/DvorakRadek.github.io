import { Coordinates } from "../components/Board";
import { checkIncludes } from "./checkIncludes";

export default function checkDiagonalVictory(playersMoves: Coordinates[]): boolean {

  if ((checkIncludes(playersMoves, { row: 1, col: 1, level: 1 })
    && checkIncludes(playersMoves, { row: 2, col: 2, level: 2 })
    && checkIncludes(playersMoves, { row: 3, col: 3, level: 3 })
    && checkIncludes(playersMoves, { row: 4, col: 4, level: 4 }))
    || (checkIncludes(playersMoves, { row: 1, col: 4, level: 1 })
    && checkIncludes(playersMoves, { row: 2, col: 3, level: 2 })
    && checkIncludes(playersMoves, { row: 3, col: 2, level: 3 })
    && checkIncludes(playersMoves, { row: 4, col: 1, level: 4 }))
    || (checkIncludes(playersMoves, { row: 1, col: 1, level: 4 })
    && checkIncludes(playersMoves, { row: 2, col: 2, level: 3 })
    && checkIncludes(playersMoves, { row: 3, col: 3, level: 2 })
    && checkIncludes(playersMoves, { row: 4, col: 4, level: 1 }))
    || (checkIncludes(playersMoves, { row: 1, col: 4, level: 4 })
    && checkIncludes(playersMoves, { row: 2, col: 3, level: 3 })
    && checkIncludes(playersMoves, { row: 3, col: 2, level: 2 })
    && checkIncludes(playersMoves, { row: 4, col: 1, level: 1 }))) {
    return true;
  }

  return false;
}