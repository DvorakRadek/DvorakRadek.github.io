type Item = { [key: string]: number };

export const checkIncludes = (arr: Item[], target: Item): boolean => {
  return arr.some(item => Object.keys(target).every(key => item[key] === target[key]));
};