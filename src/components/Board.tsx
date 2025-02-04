import { useState } from "react";

const rows = [4, 3, 2, 1];
const cols = [1, 2, 3, 4];
const levels = [1, 2, 3, 4];

type Coordinates = {
  row: number,
  col: number,
  level: number,
}

type Move = {
  player: 'x' | 'o',
  coordinates: Coordinates,
}

const moves: Move[] = [];

const Board = () => {
  const [player, setPlayer] = useState<'x' | 'o'>('x');

  const changePlayer = () => {
    setPlayer((prevPlayer) => prevPlayer === 'x' ? 'o' : 'x');
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {levels.map((level) => {
        return (
          <div className="grid grid-cols-4" key={level}>
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
                          moves.push({player, coordinates: { row, col, level }});
                          changePlayer();
                          e.currentTarget.textContent = player;
                          console.log(moves);
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
