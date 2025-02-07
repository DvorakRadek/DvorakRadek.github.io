import { Coordinates, Move } from "../common/types";
import { checkIncludes } from "./checkIncludes";

export default function checkDiagonalVictory(playersMoves: Coordinates[], lastMove: Move): boolean {
  const filteredByLevel = playersMoves.filter((move) => move.level === lastMove.coordinates.level).map((move) => ({ row: move.row, col: move.col }));
  const filteredByRow = playersMoves.filter((move) => move.row === lastMove.coordinates.row).map((move) => ({ level: move.level, col: move.col }));
  const filteredByCol = playersMoves.filter((move) => move.col === lastMove.coordinates.col).map((move) => ({ level: move.level, row: move.row }));

  if (filteredByLevel.length >= 4) {
    if ((checkIncludes(filteredByLevel, { row: 1, col: 1 })
      && checkIncludes(filteredByLevel, { row: 2, col: 2 })
      && checkIncludes(filteredByLevel, { row: 3, col: 3 })
      && checkIncludes(filteredByLevel, { row: 4, col: 4 }))
      || (checkIncludes(filteredByLevel, { row: 1, col: 4 })
      && checkIncludes(filteredByLevel, { row: 2, col: 3 })
      && checkIncludes(filteredByLevel, { row: 3, col: 2 })
      && checkIncludes(filteredByLevel, { row: 4, col: 1 }))) {
      return true;
    }
  }

  if (filteredByRow.length >= 4) {
    if ((checkIncludes(filteredByRow, { level: 1, col: 1 })
      && checkIncludes(filteredByRow, { level: 2, col: 2 })
      && checkIncludes(filteredByRow, { level: 3, col: 3 })
      && checkIncludes(filteredByRow, { level: 4, col: 4 }))
      || (checkIncludes(filteredByRow, { level: 1, col: 4 })
      && checkIncludes(filteredByRow, { level: 2, col: 3 })
      && checkIncludes(filteredByRow, { level: 3, col: 2 })
      && checkIncludes(filteredByRow, { level: 4, col: 1 }))) {
      return true;
    }
  }

  if (filteredByCol.length >= 4) {
    if ((checkIncludes(filteredByCol, { level: 1, row: 1 })
      && checkIncludes(filteredByCol, { level: 2, row: 2 })
      && checkIncludes(filteredByCol, { level: 3, row: 3 })
      && checkIncludes(filteredByCol, { level: 4, row: 4 }))
      || (checkIncludes(filteredByCol, { level: 1, row: 4 })
      && checkIncludes(filteredByCol, { level: 2, row: 3 })
      && checkIncludes(filteredByCol, { level: 3, row: 2 })
      && checkIncludes(filteredByCol, { level: 4, row: 1 }))) {
      return true;
    }
  }

  return false;
}