import axios from 'axios';
import { useEffect, useState } from 'react';

import { ChessPieceMaK } from '../../backend/src/models/game';
import Field from './Field';
import Piece from './Piece';

import type { ChessPiece } from '../App';
interface BoardType {
  gameState: ChessPiece[][]
}
const apiUrl = import.meta.env.VITE_APP_BACKEND_API_URL;


const Board: React.FC<BoardType> = ({ gameState }) => {
  // This setting can hide or show the coords for dev purposes
  const isShowingCoords: boolean = false;
  const fieldSize: number = 80;

  // States for holding the selected piece and its possible moves
  const [selectedPiece, setSelectedPiece] = useState<number[]>([]);
  const [possibleCoords, setPossibleCoords] = useState<number[][]>([]);
  const [gameStateFromNodeJsApi, setGameStateFromNodeJsApi] = useState<ChessPieceMaK[][] | undefined>();

  // This methode sets the selectedPiece and possibleCords states
  const handlePieceClick = (coords: number[]) => {
    const newSelectedPiece = selectedPiece.toString() === coords.toString() ? [] : coords;
    setSelectedPiece(newSelectedPiece);
    setPossibleCoords(newSelectedPiece.length ? possibleCoords ?? [] : []);
  };

  const sendSelectedPieceCoords = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/selectPiece/${selectedPiece[0]}/${selectedPiece[1]}`,);
      setPossibleCoords(response.data.possibleMoves);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  const movePiece = async (coords: [number, number]) => {
    try {
      const response = await axios.post(`${apiUrl}/api/movePiece/`, coords );
      setGameStateFromNodeJsApi(response.data.board)
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  const resetHandler = async () => {
    fetch(`${apiUrl}/api/reset`)
      .then(response => response.json())
      .then(data => {
        setGameStateFromNodeJsApi(data.board);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetch(`${apiUrl}/api/gameState`)
      .then(response => response.json())
      .then(data => {
        setGameStateFromNodeJsApi(data.board);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    if (selectedPiece.length === 0) {
      return;
    }
    sendSelectedPieceCoords();
  }, [selectedPiece])

  useEffect(() => {
  }, [gameStateFromNodeJsApi])

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
          {gameStateFromNodeJsApi?.map((row, i) => (
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
                    movePiece={movePiece}
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
      <button className="block mt-4 bg-orange-300 py-3 px-5 rounded-md opacity-75 hover:opacity-100 mx-auto" onClick={resetHandler}>Reset</button>
    </>
  );
};

export default Board