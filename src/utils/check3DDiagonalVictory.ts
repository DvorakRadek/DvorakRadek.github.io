import { DIAGONAL_3D_COMBINATIONS } from "../common/constants";
import { Coordinates } from "../common/types";
import { checkIncludes } from "./checkIncludes";

export default function check3DDiagonalVictory(playersMoves: Coordinates[]): false | Coordinates[] {

  const checkVictoryCombination = (combination: Coordinates[]): boolean => {
    return combination.every(cell => checkIncludes(playersMoves, cell));
  };

  for (const combination of Object.values(DIAGONAL_3D_COMBINATIONS)) {
    if (checkVictoryCombination(combination)) {
      return combination;
    }
  }

  return false;
}