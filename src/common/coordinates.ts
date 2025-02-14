import { getCoordinates } from "../utils/getCoordinates";
import { LEVELS } from "./constants";

export const coordinates = {
  rows: getCoordinates(LEVELS),
  cols: getCoordinates(LEVELS),
  levels: getCoordinates(LEVELS),
};