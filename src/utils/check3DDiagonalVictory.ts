import { Coordinates } from "../common/types";
import { checkIncludes } from "./checkIncludes";

export default function check3DDiagonalVictory(playersMoves: Coordinates[]): false | Coordinates[] {
  const victoryCombination1 = [
    { row: 1, col: 1, level: 1 },
    { row: 2, col: 2, level: 2 },
    { row: 3, col: 3, level: 3 },
    { row: 4, col: 4, level: 4 },
  ];

  const victoryCombination2 = [
    { row: 1, col: 4, level: 1 },
    { row: 2, col: 3, level: 2 },
    { row: 3, col: 2, level: 3 },
    { row: 4, col: 1, level: 4 },
  ];

  const victoryCombination3 = [
    { row: 1, col: 1, level: 4 },
    { row: 2, col: 2, level: 3 },
    { row: 3, col: 3, level: 2 },
    { row: 4, col: 4, level: 1 },
  ];

  const victoryCombination4 = [
    { row: 1, col: 4, level: 4 },
    { row: 2, col: 3, level: 3 },
    { row: 3, col: 2, level: 2 },
    { row: 4, col: 1, level: 1 },
  ];

  const checkVictoryCombination = (combination: Coordinates[]): boolean => {
    return combination.every(cell => checkIncludes(playersMoves, cell));
  };

  if (checkVictoryCombination(victoryCombination1)
    || checkVictoryCombination(victoryCombination2)
    || checkVictoryCombination(victoryCombination3)
    || checkVictoryCombination(victoryCombination4)) {
      if (checkVictoryCombination(victoryCombination1)) return victoryCombination1;
      if (checkVictoryCombination(victoryCombination2)) return victoryCombination2;
      if (checkVictoryCombination(victoryCombination3)) return victoryCombination3;
      if (checkVictoryCombination(victoryCombination4)) return victoryCombination4;
  }

  return false;
}