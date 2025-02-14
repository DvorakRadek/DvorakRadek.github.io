import { LEVELS } from "../../common/constants";
import { Coordinates, Move } from "../../common/types";

export default function checkRowVictory(moves: Coordinates[], lastMove: Move): false | Coordinates[] {
  const filteredLC = moves.filter((move) => {
    return move.level === lastMove.coordinates.level && move.col === lastMove.coordinates.col;
  });

  const filteredLR = moves.filter((move) => {
    return move.level === lastMove.coordinates.level && move.row === lastMove.coordinates.row;
  });

  const filteredCR = moves.filter((move) => {
    return move.col === lastMove.coordinates.col && move.row === lastMove.coordinates.row;
  });


  if (filteredLC.length === LEVELS || filteredLR.length === LEVELS || filteredCR.length === LEVELS) {
    if (filteredLC.length === LEVELS) return filteredLC;
    if (filteredLR.length === LEVELS) return filteredLR;
    if (filteredCR.length === LEVELS) return filteredCR;
  }
  return false;
}