import { useRef, useState } from "react";
import { Move, Player } from "../common/types";
import Dialog from "./ui/Dialog";
import { toggleModal } from "../utils/togglemodal";
import { restart } from "../utils/restart";
import Button from "./ui/Button";
import Cell from "./Cell";
import { coordinates } from "../common/coordinates";

const moves: Move[] = [];

const Board = () => {
  const [player, setPlayer] = useState<Player>('x');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const changePlayer = () => {
    setPlayer((prevPlayer) => prevPlayer === 'x' ? 'o' : 'x');
  };

  return (
    <div className="my-10 flex flex-col items-center">
      <h2 className="text-center mb-10 text-5xl">Player <span className="font-bold">{player.toUpperCase()}</span>'s turn</h2>

      <Button onClick={() => restart(moves, boardRef)}>New Game</Button>

      <Dialog ref={dialogRef} player={player} onCancel={() => toggleModal(dialogRef)} />
      
      <div ref={boardRef} className={`mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
        {coordinates.levels.map((level) => {
          return (
            <div className="flex flex-wrap border-2" key={level}>
              {coordinates.cols.map((col) => {
                return (
                  <div key={col}>
                    {coordinates.rows.map((row) => {
                      return (
                        <Cell key={row} row={row} col={col} level={level} boardRef={boardRef} dialogRef={dialogRef} player={player} moves={moves} changePlayer={changePlayer} />
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
