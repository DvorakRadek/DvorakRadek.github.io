import { Coordinates } from "../../common/types";
import { checkIncludes } from "./checkIncludes";
import { getCombination1, getCombination2, getCombination3, getCombination4 } from "../victoryCombinations/diagonal3D";

export default function check3DDiagonalVictory(playersMoves: Coordinates[]): false | Coordinates[] {

  const checkVictoryCombination = (combination: Coordinates[]): boolean => {
    return combination.every(cell => checkIncludes(playersMoves, cell));
  };

  const diagonal3DCombinations = [getCombination1(), getCombination2(), getCombination3(), getCombination4()];

  for (const combination of diagonal3DCombinations) {
    if (checkVictoryCombination(combination)) {
      return combination;
    }
  }

  return false;
}