import { Coordinates, Move } from "../../common/types";
import { checkIncludes } from "./checkIncludes";
import { getColDiagonalCombination, getLevelDiagonalCombination, getRowDiagonalCombination } from "../victoryCombinations/diagonal";
import { LEVELS } from "../../common/constants";

export default function checkDiagonalVictory(playersMoves: Coordinates[], lastMove: Move): false | Coordinates[] {
  const filteredByLevel = playersMoves.filter((move) => move.level === lastMove.coordinates.level).map((move) => ({ row: move.row, col: move.col, level: move.level }));
  const filteredByRow = playersMoves.filter((move) => move.row === lastMove.coordinates.row).map((move) => ({ row: move.row, col: move.col, level: move.level }));
  const filteredByCol = playersMoves.filter((move) => move.col === lastMove.coordinates.col).map((move) => ({ row: move.row, col: move.col, level: move.level }));

  const checkAndReturnCombination = (filtered: Coordinates[], combinations: Coordinates[][]): false | Coordinates[] => {
    if (filtered.length >= LEVELS) {
      for (const combination of combinations) {
        if (combination.every(cell => checkIncludes(filtered, cell))) {
          return combination;
        }
      }
    }
    return false;
  };

  const levelDiagonalCombination = getLevelDiagonalCombination(lastMove);
  const rowDiagonalCombination = getRowDiagonalCombination(lastMove);
  const colDiagonalCombination = getColDiagonalCombination(lastMove);

  return checkAndReturnCombination(filteredByLevel, levelDiagonalCombination)
    || checkAndReturnCombination(filteredByRow, rowDiagonalCombination)
    || checkAndReturnCombination(filteredByCol, colDiagonalCombination)
    || false;
}