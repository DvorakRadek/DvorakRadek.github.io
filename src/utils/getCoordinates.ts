export const getCoordinates = (levels: number) => {
  const result = [];
  for (let i = 1; i <= levels; i++) {
    result.push(i);
  }
  return result;
};