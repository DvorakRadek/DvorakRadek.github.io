import { useRef, useState } from "react";
import checkVictory from "../utils/checkVictory";
import { Move, Player } from "../common/types";
import Dialog from "./ui/Dialog";
import { toggleModal } from "../utils/togglemodal";
import { COORDINATES } from "../common/constants";
import { restart } from "../utils/restart";
import { highlightVictory } from "../utils/highlightVictory";
import Button from "./ui/Button";

const moves: Move[] = [];

const Board = () => {
  const [player, setPlayer] = useState<Player>('x');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const changePlayer = () => {
    setPlayer((prevPlayer) => prevPlayer === 'x' ? 'o' : 'x');
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mb-10 text-5xl">Player's <span className="font-bold">{player.toUpperCase()}</span> turn</h2>

      <Button onClick={() => restart(moves, boardRef)}>New Game</Button>

      <Dialog ref={dialogRef} player={player} onCancel={() => toggleModal(dialogRef)} />

      <div ref={boardRef} className="grid grid-cols-4 gap-8">
        {COORDINATES.levels.map((level) => {
          return (
            <div className="grid grid-cols-4 border-2" key={level}>
              {COORDINATES.cols.map((col) => {
                return (
                  <div key={col}>
                    {COORDINATES.rows.map((row) => {
                      return (
                        <div
                          key={row}
                          id={`row${row}-col${col}-level${level}`}
                          className="border w-20 h-20 flex justify-center items-center text-5xl cell"
                          onClick={(e) => {
                            if (e.currentTarget.textContent) return;
                            e.currentTarget.textContent = player;
                            const lastMove = {player, coordinates: { row, col, level }};
                            moves.push(lastMove);
                            if (checkVictory(player, moves, lastMove)) {
                              highlightVictory(checkVictory(player, moves, lastMove), boardRef);
                              toggleModal(dialogRef);
                              boardRef.current?.setAttribute('inert', 'true');
                            } else changePlayer();
                        }}></div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Board
