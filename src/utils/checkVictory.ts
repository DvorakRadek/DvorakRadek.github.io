import { Move, Player } from "../components/Board";
import checkDiagonalVictory from "./checkDiagonalVictory";
import checkFullDiagonalVictory from "./checkFullDiagonalVictory";
import checkRowVictory from "./checkRowVictory";

export default function checkVictory(player: Player, moves: Move[], lastMove: Move): void {
  const playersMoves = moves.filter((move) => move.player === player).map((move) => move.coordinates);

  if (checkRowVictory(playersMoves, lastMove) || checkDiagonalVictory(playersMoves, lastMove) || checkFullDiagonalVictory(playersMoves)) {
    alert(`Player ${player} wins!`);
  }
}