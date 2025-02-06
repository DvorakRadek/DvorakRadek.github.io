import { useState } from "react";
import checkVictory from "../utils/checkVictory";

const rows = [1, 2, 3, 4];
const cols = [1, 2, 3, 4];
const levels = [1, 2, 3, 4];

export type Coordinates = {
  row: number,
  col: number,
  level: number,
}

export type Move = {
  player: 'x' | 'o',
  coordinates: Coordinates,
}

export type Player = 'x' | 'o';

const moves: Move[] = [];

const Board = () => {
  const [player, setPlayer] = useState<Player>('x');

  const changePlayer = () => {
    setPlayer((prevPlayer) => prevPlayer === 'x' ? 'o' : 'x');
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      {levels.map((level) => {
        return (
          <div className="grid grid-cols-4 border-2" key={level}>
            {cols.map((col) => {
              return (
                <div key={col}>
                  {rows.map((row) => {
                    return (
                      <div
                        key={row}
                        className="border w-20 h-20 flex justify-center items-center text-5xl"
                        onClick={(e) => {
                          if (e.currentTarget.textContent) return;
                          e.currentTarget.textContent = player;

                          const lastMove = {player, coordinates: { row, col, level }};
                          moves.push(lastMove);
                          checkVictory(player, moves, lastMove);
                          changePlayer();
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
  )
}

export default Board
