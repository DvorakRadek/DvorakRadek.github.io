import { Coordinates, Move } from "../components/Board";

export default function checkRowVictory(moves: Coordinates[], lastMove: Move): boolean {
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
    return true;
  }
  return false;
}