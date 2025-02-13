import { Coordinates, Move } from "../common/types";
import { checkIncludes } from "./checkIncludes";

export default function checkDiagonalVictory(playersMoves: Coordinates[], lastMove: Move): false | Coordinates[] {
  const filteredByLevel = playersMoves.filter((move) => move.level === lastMove.coordinates.level).map((move) => ({ row: move.row, col: move.col, level: move.level }));
  const filteredByRow = playersMoves.filter((move) => move.row === lastMove.coordinates.row).map((move) => ({ row: move.row, col: move.col, level: move.level }));
  const filteredByCol = playersMoves.filter((move) => move.col === lastMove.coordinates.col).map((move) => ({ row: move.row, col: move.col, level: move.level }));

  const checkAndReturnCombination = (filtered: Coordinates[], combination1: Coordinates[], combination2: Coordinates[]): false | Coordinates[] => {
    if (filtered.length >= 4) {
      if (combination1.every(cell => checkIncludes(filtered, cell))) {
        return combination1;
      }
      if (combination2.every(cell => checkIncludes(filtered, cell))) {
        return combination2;
      }
    }
    return false;
  };

  const levelDiagonalCombination1 = [
    { row: 1, col: 1, level: lastMove.coordinates.level },
    { row: 2, col: 2, level: lastMove.coordinates.level },
    { row: 3, col: 3, level: lastMove.coordinates.level },
    { row: 4, col: 4, level: lastMove.coordinates.level },
  ];

  const levelDiagonalCombination2 = [
    { row: 1, col: 4, level: lastMove.coordinates.level },
    { row: 2, col: 3, level: lastMove.coordinates.level },
    { row: 3, col: 2, level: lastMove.coordinates.level },
    { row: 4, col: 1, level: lastMove.coordinates.level },
  ];

  const rowDiagonalCombination1 = [
    { row: lastMove.coordinates.row, col: 1, level: 1 },
    { row: lastMove.coordinates.row, col: 2, level: 2 },
    { row: lastMove.coordinates.row, col: 3, level: 3 },
    { row: lastMove.coordinates.row, col: 4, level: 4 },
  ];

  const rowDiagonalCombination2 = [
    { row: lastMove.coordinates.row, col: 4, level: 1 },
    { row: lastMove.coordinates.row, col: 3, level: 2 },
    { row: lastMove.coordinates.row, col: 2, level: 3 },
    { row: lastMove.coordinates.row, col: 1, level: 4 },
  ];

  const colDiagonalCombination1 = [
    { row: 1, col: lastMove.coordinates.col, level: 1 },
    { row: 2, col: lastMove.coordinates.col, level: 2 },
    { row: 3, col: lastMove.coordinates.col, level: 3 },
    { row: 4, col: lastMove.coordinates.col, level: 4 },
  ];

  const colDiagonalCombination2 = [
    { row: 4, col: lastMove.coordinates.col, level: 1 },
    { row: 3, col: lastMove.coordinates.col, level: 2 },
    { row: 2, col: lastMove.coordinates.col, level: 3 },
    { row: 1, col: lastMove.coordinates.col, level: 4 },
  ];

  return checkAndReturnCombination(filteredByLevel, levelDiagonalCombination1, levelDiagonalCombination2)
    || checkAndReturnCombination(filteredByRow, rowDiagonalCombination1, rowDiagonalCombination2)
    || checkAndReturnCombination(filteredByCol, colDiagonalCombination1, colDiagonalCombination2)
    || false;
}