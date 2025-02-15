import { LEVELS } from "../../common/constants";
import { Coordinates } from "../../common/types";

export const getCombinations = () => {
  const result: Coordinates[][] = [[], [], [], []];
  for (let i = 1; i <= LEVELS; i++) {
    result[0].push({
      row: i,
      col: i,
      level: i,
    });
    result[1].push({
      row: LEVELS - i + 1,
      col: i,
      level: i,
    });
    result[2].push({
      row: i,
      col: LEVELS - i + 1,
      level: i,
    });
    result[3].push({
      row: i,
      col: i,
      level: LEVELS - i + 1,
    });
  }
  return result;
};