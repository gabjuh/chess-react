import { useEffect, useState } from 'react';

import { ChessPieceMaK } from '../../backend/src/models/game';

const getIsWhitePiece = (piece: string | null): boolean => {
  if (piece && piece === piece.toUpperCase()) {
    return true;
  }
  return false;
}

interface Piece {
  piece: ChessPieceMaK;
  coords: [number, number];
  isSelected: boolean;
  handlePieceClick: (coords: number[]) => void;
  isHighlighted: boolean;
  isMoveable: boolean;
  fieldSize: number;
  movePiece: (coords: [number, number]) => void;
  mePlayerColor: 'black' | 'white';
}

const Piece: React.FC<Piece> = ({
  piece,
  coords,
  isSelected,
  handlePieceClick,
  isHighlighted,
  isMoveable,
  fieldSize,
  movePiece,
  mePlayerColor
}) => {

  const isWhitePiece = getIsWhitePiece(piece);

  // This handler sets the clicked pieces coords, if there is one
  // and removes selection, if we click on an empty field
  const clickHandler = () => {
    // The black pieces are not clickable if not highlighted
    if (!isWhitePiece && !isHighlighted) {
      return;
    }


    if (isWhitePiece) {
      handlePieceClick(piece ? coords : []);
      return;
    }
    
    isHighlighted && movePiece(coords);

  }

  const pieceChars: any = {
    pawn: ["♟", "♙"],
    rook: ["♜", "♖"],
    knight: ["♞", "♘"],
    bishop: ["♝", "♗"],
    queen: ["♛", "♕"],
    king: ["♚", "♔"],
  };

  const getPieceChar = () => {
    if (!piece) {
      return;
    }

    // Uppercase: white
    if (getIsWhitePiece(piece)) {
      return pieceChars[piece.toLowerCase()][0];
    }

    // Lowercase: black
    return pieceChars[piece][1];
  };

  return (
    <div 
      onClick={clickHandler}
      style={{
        width: `${fieldSize}px`,
        height: `${fieldSize}px`
      }}
      className={`select-none border-[0px] border-opacity-0 relative text-white text-center box-border transition-all ease-in-out duration-150 ${piece && isWhitePiece ? 'cursor-pointer hover:bg-gray-400 hover:bg-opacity-30' : ''}  ${isHighlighted ? 'cursor-pointer bg-green-600 bg-opacity-30 w-full h-full block' : ''} `}>

      {/* Overlay for border */}
      <div className={`block absolute transition-all duration-150 ease-in-out ${isSelected ? isMoveable ? 'border-[9px] border-green-400' : 'border-[9px] border-orange-400' : ''} w-full h-full`}></div>

      {/* Piece with transition effects */}
      <span className={`block transition-all duration-150 ease-in-out ${isSelected && isMoveable  ? 'translate-y-[-4px] scale-[1.15] rotate-[8deg] drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]' : ''}`}>{getPieceChar()}</span>

    </div>
  )
}

export default Piece