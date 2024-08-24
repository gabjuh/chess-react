import { useEffect, useState } from 'react';

import Field from './Field';
import Piece from './Piece';

import type { ChessPiece } from '../App';
import type { PieceObjType } from '../../backend/src/types/types';
interface BoardType {
  gameState: ChessPiece[][]
}

// This object represents the object of possible moves could we 
// recieve from the api for this very first state of the figures
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
  // This setting can hide or show the coords for dev purposes
  const isShowingCoords: boolean = false;
  const fieldSize: number = 80;

  // States for holding the selected piece and its possible moves
  const [selectedPiece, setSelectedPiece] = useState<number[]>([]);
  const [possibleCoords, setPossibleCoords] = useState<number[][]>([]);
  const [gameStateFromNodeJsApi, setGameStateFromNodeJsApi] = useState<PieceObjType[][] | undefined>();

  // This helper methode gets the possible moves from our object,
  // it can be replaced with the correct fetching methode for
  // getting the possible moves only for the clicked piece
  const getPossibleMoves = (pieceCoords: number[]): number[][] => {
    // Because the key is a string version of the coordinate like
    // '0,0', we have to create first this string key:
    const key = `${pieceCoords[0]},${pieceCoords[1]}` as keyof typeof possibleMoves;
    // Than if there is a possible way, we return it, if not than an empty array.
    return possibleMoves[key] ?? [];
  };

  // This methode sets the selectedPiece and possibleCords states
  const handlePieceClick = (coords: number[]) => {
    const newSelectedPiece = selectedPiece.toString() === coords.toString() ? [] : coords;
    setSelectedPiece(newSelectedPiece);
    setPossibleCoords(newSelectedPiece.length ? getPossibleMoves(newSelectedPiece) : []);
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/game-state')
      .then(response => response.json())
      .then(data => {
        setGameStateFromNodeJsApi(data);
      })
      .catch(error => {
        console.error(error);
      });
  })

  return (
    <>
      {/* Overlay */}
      <table 
        style={{
          width: `${8 * fieldSize + 8 * 2}px`,
          height: `${8 * fieldSize + 8 * 2}px`
        }}
        className="absolute top-0 mx-auto left-0 right-0 z-10"
      >
        <tbody>
          {/* {gameStateFromNodeJsApi?.map((row, i) => ( */}
          {gameState?.map((row, i) => (
            <tr key={i}>
              {row && row.map((piece, j) => (
                <td key={j} className="chess-piece">
                  <Piece 
                    piece={piece}
                    coords={[i, j]}
                    isSelected={selectedPiece.toString() === [i, j].toString()}
                    handlePieceClick={handlePieceClick}
                    isHighlighted={possibleCoords.some(
                      (coord) => coord[0] === i && coord[1] === j
                    )}
                    isMoveable={possibleCoords.length > 0}
                    fieldSize={fieldSize}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Board */}
      <table className="mx-auto mt-0">
        <tbody>
          {gameState.map((row, i) => (
            <tr key={i}>
              {row.map((_, j) => (
                <td key={j} className="chess-piece">
                  <Field
                    isDark={i % 2 === 0 ? j % 2 !== 0 : j % 2 === 0}
                    coords={[i, j]}                    
                    isShowingChords={isShowingCoords}
                    fieldSize={fieldSize}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Board