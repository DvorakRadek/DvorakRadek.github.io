import { Coordinates } from "../../common/types";
import { checkIncludes } from "./checkIncludes";
import { getCombinations } from "../victoryCombinations/diagonal3D";

export default function check3DDiagonalVictory(playersMoves: Coordinates[]): false | Coordinates[] {

  const checkVictoryCombination = (combination: Coordinates[]): boolean => {
    return combination.every(cell => checkIncludes(playersMoves, cell));
  };

  const diagonal3DCombinations = getCombinations();

  for (const combination of diagonal3DCombinations) {
    if (checkVictoryCombination(combination)) {
      return combination;
    }
  }

  return false;
}