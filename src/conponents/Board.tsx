import { useEffect, useState } from 'react';

import Field from './Field';

import type { ChessPiece } from '../App';
interface BoardType {
  gameState: ChessPiece[][]
}

// This object represents the object could we recieve from the api
// for this very first state of the figures
const possibleMoves = {
  '0,0': [],
  '0,1': [[2,0], [2,2]],
  '0,2': [],
  '0,3': [],
  '0,4': [],
  '0,5': [],
  '0,6': [[2,5], [2,7]],
  '0,7': [],
  '1,0': [[2,0], [3,0]],
  '1,1': [[2,1], [3,1]],
  '1,2': [[2,2], [3,2]],
  '1,3': [[2,3], [3,3]],
  '1,4': [[2,4], [3,4]],
  '1,5': [[2,5], [3,5]],
  '1,6': [[2,6], [3,6]],
  '1,7': [[2,7], [3,7]],
  '6,0': [[5,0], [4,0]],
  '6,1': [[5,1], [4,1]],
  '6,2': [[5,2], [4,2]],
  '6,3': [[5,3], [4,3]],
  '6,4': [[5,4], [4,4]],
  '6,5': [[5,5], [4,5]],
  '6,6': [[5,6], [4,6]],
  '6,7': [[5,7], [4,7]],
  '7,0': [],
  '7,1': [[5,0], [5,2]],
  '7,2': [],
  '7,3': [],
  '7,4': [],
  '7,5': [],
  '7,6': [[5,5], [5,7]],
  '7,7': [],

}

const Board: React.FC<BoardType> = ({ gameState }) => {
  const [selectedPiece, setSelectedPiece] = useState<number[]>([]);
  const [possibleCoords, setPossibleCoords] = useState<number[][]>([]);
  const isShowingCoords: boolean = false;

  const getPossibleMoves = (pieceCoords: number[]): number[][] => {
    const key = `${pieceCoords[0]},${pieceCoords[1]}` as keyof typeof possibleMoves;
    return possibleMoves[key] ?? [];
  };

  const handlePieceClick = (coords: number[]) => {
    const newSelectedPiece = selectedPiece.toString() === coords.toString() ? [] : coords;
    setSelectedPiece(newSelectedPiece);
    setPossibleCoords(newSelectedPiece.length ? getPossibleMoves(newSelectedPiece) : []);
  };

  return (
    <table className="mx-auto mt-0">
      <tbody>
        {gameState.map((row, i) => (
          <tr key={i}>
            {row.map((piece, j) => (
              <td key={j} className="chess-piece">
                <Field
                  piece={piece}
                  isDark={i % 2 === 0 ? j % 2 !== 0 : j % 2 === 0}
                  coords={[i, j]}
                  isSelected={selectedPiece.toString() === [i, j].toString()}
                  handlePieceClick={handlePieceClick}
                  isHighlighted={possibleCoords.some(
                    (coord) => coord[0] === i && coord[1] === j
                  )}
                  isShowingChords={isShowingCoords}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board