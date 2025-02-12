import { Move } from "../common/types";

export const restart = (moves: Move[], boardRef: React.RefObject<HTMLDivElement>): void => {
  moves.length = 0;
  boardRef.current?.querySelectorAll('.cell').forEach((cell) => {cell.textContent = ''; cell.classList.remove('text-green-400')});
  boardRef.current?.removeAttribute('inert');
};