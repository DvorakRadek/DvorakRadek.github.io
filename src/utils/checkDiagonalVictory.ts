import { Coordinates, Move } from "../common/types";
import { checkIncludes } from "./checkIncludes";

export default function checkDiagonalVictory(playersMoves: Coordinates[], lastMove: Move): false | Coordinates[] {
  const filteredByLevel = playersMoves.filter((move) => move.level === lastMove.coordinates.level).map((move) => ({ row: move.row, col: move.col, level: move.level }));
  const filteredByRow = playersMoves.filter((move) => move.row === lastMove.coordinates.row).map((move) => ({ row: move.row, col: move.col, level: move.level }));
  const filteredByCol = playersMoves.filter((move) => move.col === lastMove.coordinates.col).map((move) => ({ row: move.row, col: move.col, level: move.level }));

  if (filteredByLevel.length >= 4) {
    if ((checkIncludes(filteredByLevel, { row: 1, col: 1 })
      && checkIncludes(filteredByLevel, { row: 2, col: 2 })
      && checkIncludes(filteredByLevel, { row: 3, col: 3 })
      && checkIncludes(filteredByLevel, { row: 4, col: 4 }))
      || (checkIncludes(filteredByLevel, { row: 1, col: 4 })
      && checkIncludes(filteredByLevel, { row: 2, col: 3 })
      && checkIncludes(filteredByLevel, { row: 3, col: 2 })
      && checkIncludes(filteredByLevel, { row: 4, col: 1 }))) {
      return filteredByLevel;
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
      return filteredByRow;
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
      return filteredByCol;
    }
  }

  return false;
}