import { HIGHLIGHTED } from "../../common/constants";
import { Coordinates } from "../../common/types";

export const highlightVictory = (victoryCells: false | Coordinates[], boardRef: React.RefObject<HTMLDivElement>) => {
  if (!victoryCells) return;
  victoryCells.forEach((cell) => {
    const victoryCell = boardRef.current?.querySelector(`#row${cell.row}-col${cell.col}-level${cell.level}`);
    victoryCell?.classList.add(...HIGHLIGHTED.victoryCells);
  });
};