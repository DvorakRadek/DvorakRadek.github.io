import { LASTMOVE } from "../common/constants";
import { Move } from "../common/types";

export const markLastMove = (boardRef: React.RefObject<HTMLDivElement>, lastMove: Move): void => {
  boardRef.current?.querySelector('.font-bold')?.classList.remove(LASTMOVE);
  boardRef.current?.querySelector(`#row${lastMove.coordinates.row}-col${lastMove.coordinates.col}-level${lastMove.coordinates.level}`)?.classList.add(LASTMOVE);
}