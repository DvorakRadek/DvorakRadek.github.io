import { useState } from "react";

const xCoordinates = [4, 3, 2, 1];
const yCoordinates = [1, 2, 3, 4];
const zCoordinates = [1, 2, 3, 4];

type move = {
  player: 'x' | 'o',
  x: number,
  y: number,
  z: number,
}

const moves: move[] = [];

const Board = () => {
  const [player, setPlayer] = useState<'x' | 'o'>('x');

  return (
    <div className="grid grid-cols-2 gap-8">
      {zCoordinates.map((z) => {
        return (
          <div className="grid grid-cols-4" key={z}>
            {yCoordinates.map((y) => {
              return (
                <div key={z + y}>
                  {xCoordinates.map((x) => {
                    return (
                      <div
                        key={z + y + x}
                        className="border w-20 h-20"
                        onClick={(e) => {
                          moves.push({player, x, y, z});
                          setPlayer(player === 'x' ? 'o' : 'x');
                          e.currentTarget.textContent = player;
                          e.currentTarget.onclick = () => e.currentTarget.setAttribute('inert', '');
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
