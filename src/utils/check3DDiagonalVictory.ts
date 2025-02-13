import { DIAGONAL_3D_COMBINATIONS } from "../common/constants";
import { Coordinates } from "../common/types";
import { checkIncludes } from "./checkIncludes";

export default function check3DDiagonalVictory(playersMoves: Coordinates[]): false | Coordinates[] {

  const checkVictoryCombination = (combination: Coordinates[]): boolean => {
    return combination.every(cell => checkIncludes(playersMoves, cell));
  };

  if (checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination1)
    || checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination2)
    || checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination3)
    || checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination4)) {
      if (checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination1)) return DIAGONAL_3D_COMBINATIONS.victoryCombination1;
      if (checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination2)) return DIAGONAL_3D_COMBINATIONS.victoryCombination2;
      if (checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination3)) return DIAGONAL_3D_COMBINATIONS.victoryCombination3;
      if (checkVictoryCombination(DIAGONAL_3D_COMBINATIONS.victoryCombination4)) return DIAGONAL_3D_COMBINATIONS.victoryCombination4;
  }

  return false;
}