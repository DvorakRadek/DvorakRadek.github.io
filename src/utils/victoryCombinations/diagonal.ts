import { LEVELS } from "../../common/constants";
import { Coordinates, Move} from "../../common/types";

export const getLevelDiagonalCombination = (lastMove: Move) => {
  const result: Coordinates[][] = [[], []];
  for (let i = 1; i <= LEVELS; i++) {
    result[0].push({
      row: i,
      col: i,
      level: lastMove.coordinates.level,
    });
    result[1].push({
      row: LEVELS - i + 1,
      col: i,
      level: lastMove.coordinates.level,
    })
  }
  return result;
};

export const getRowDiagonalCombination = (lastMove: Move) => {
  const result: Coordinates[][] = [[], []];
  for (let i = 1; i <= LEVELS; i++) {
    result[0].push({
      row: lastMove.coordinates.row,
      col: i,
      level: i,
    });
    result[1].push({
      row: lastMove.coordinates.row,
      col: LEVELS - i + 1,
      level: i,
    })
  }
  return result;
};

export const getColDiagonalCombination = (lastMove: Move) => {
  const result: Coordinates[][] = [[], []];
  for (let i = 1; i <= LEVELS; i++) {
    result[0].push({
      row: i,
      col: lastMove.coordinates.col,
      level: i,
    });
    result[1].push({
      row: LEVELS - i + 1,
      col: lastMove.coordinates.col,
      level: i,
    })
  }
  return result;
};