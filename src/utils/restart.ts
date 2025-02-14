import { HIGHLIGHTED } from "../common/constants";
import { Move } from "../common/types";

export const restart = (moves: Move[], boardRef: React.RefObject<HTMLDivElement>): void => {
  moves.length = 0;
  boardRef.current?.querySelectorAll('.cell').forEach((cell) => {cell.textContent = ''; cell.classList.remove(...HIGHLIGHTED.victoryCells)});
  boardRef.current?.removeAttribute('inert');
};