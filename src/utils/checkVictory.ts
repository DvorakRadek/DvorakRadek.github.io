import { Move, Player } from "../common/types";
import checkDiagonalVictory from "./checkDiagonalVictory";
import checkFullDiagonalVictory from "./checkFullDiagonalVictory";
import checkRowVictory from "./checkRowVictory";

export default function checkVictory(player: Player, moves: Move[], lastMove: Move): boolean {
  const playersMoves = moves.filter((move) => move.player === player).map((move) => move.coordinates);

  if (checkRowVictory(playersMoves, lastMove)
      || checkDiagonalVictory(playersMoves, lastMove)
      || checkFullDiagonalVictory(playersMoves)) {
        return true;
  }
  
  return false;
}