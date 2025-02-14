import { RefObject } from "react";
import { Player, Move } from "../common/types";
import { toggleModal } from "../utils/togglemodal";
import checkVictory from "../utils/victoryChecks/checkVictory";
import { highlightLastMove } from "../utils/highlight/highlightLastMove";
import { highlightVictory } from "../utils/highlight/highlightVictory";

type CellProps = {
  row: number,
  col: number,
  level: number,
  boardRef: RefObject<HTMLDivElement>,
  dialogRef: RefObject<HTMLDialogElement>,
  player: Player,
  moves: Move[],
  changePlayer: () => void,
}

const Cell = ({ row, col, level, moves, player, boardRef, dialogRef, changePlayer}: CellProps) => {
  return (
    <div
      id={`row${row}-col${col}-level${level}`}
      className="border w-20 h-20 flex justify-center items-center text-5xl cell"
      onClick={(e) => {
        if (e.currentTarget.textContent) return;
        e.currentTarget.textContent = player;
        const lastMove = {player, coordinates: { row, col, level }};
        moves.push(lastMove);
        highlightLastMove(boardRef, lastMove);
        if (checkVictory(player, moves, lastMove)) {
          highlightVictory(checkVictory(player, moves, lastMove), boardRef);
          toggleModal(dialogRef);
          boardRef.current?.setAttribute('inert', 'true');
        } else changePlayer();
    }} />
  );
};

export default Cell;