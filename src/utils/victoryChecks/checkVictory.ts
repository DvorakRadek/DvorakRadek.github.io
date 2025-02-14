import { Coordinates, Move, Player } from "../../common/types";
import checkDiagonalVictory from "./checkDiagonal";
import check3DDiagonalVictory from "./checkDiagonal3D";
import checkRowVictory from "./checkRow";

export default function checkVictory(player: Player, moves: Move[], lastMove: Move): false | Coordinates[] {
  const playersMoves = moves.filter((move) => move.player === player).map((move) => move.coordinates);

  return checkRowVictory(playersMoves, lastMove)
  || checkDiagonalVictory(playersMoves, lastMove)
  || check3DDiagonalVictory(playersMoves);
}