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


  if (filteredLC.length === 4 || filteredLR.length === 4 || filteredCR.length === 4) {
    if (filteredLC.length === 4) return filteredLC;
    if (filteredLR.length === 4) return filteredLR;
    if (filteredCR.length === 4) return filteredCR;
  }
  return false;
}