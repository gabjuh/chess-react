export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';
export type PieceChar = "♔" | "♕" | "♖" | "♗" | "♘" | "♙" | "♚" | "♛" | "♜" | "♝" | "♞" | "♟" ;
export type PieceObjType = {
  type: PieceType,
  color: PieceColor,
  char: PieceChar,
  currentPos: number[],
}


export class ChessPiece {
  type: PieceType;
  color: PieceColor;
  currentPos: [number, number];
  char: PieceChar;

  constructor(type: PieceType, color: PieceColor, char: PieceChar, currentPos: [number, number]) {
    this.type = type;
    this.color = color;
    this.char = char;
    this.currentPos = currentPos;
  }
}
