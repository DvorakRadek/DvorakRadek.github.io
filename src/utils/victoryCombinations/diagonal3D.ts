import { LEVELS } from "../../common/constants";

export const getCombination1 = () => {
  const result = [];
  for (let i = 1; i <= LEVELS; i++) {
    result.push({
      row: i,
      col: i,
      level: i,
    });
  }
  return result;
};

export const getCombination2 = () => {
  const result = [];
  for (let i = 1; i <= LEVELS; i++) {
    result.push({
      row: LEVELS - i + 1,
      col: i,
      level: i,
    });
  }
  return result;
};

export const getCombination3 = () => {
  const result = [];
  for (let i = 1; i <= LEVELS; i++) {
    result.push({
      row: i,
      col: LEVELS - i + 1,
      level: i,
    });
  }
  return result;
};

export const getCombination4 = () => {
  const result = [];
  for (let i = 1; i <= LEVELS; i++) {
    result.push({
      row: i,
      col: i,
      level: LEVELS - i + 1,
    });
  }
  return result;
};