import { PieceChar, PieceColor, PieceType, PossibleMoves } from '../types/types';

export class ChessPiece {
  type: PieceType;
  color: PieceColor;
  currentPos: [number, number];
  char: PieceChar;
  possibleMoves: PossibleMoves = [];

  constructor(type: PieceType, color: PieceColor, char: PieceChar, currentPos: [number, number]) {
    this.type = type;
    this.color = color;
    this.char = char;
    this.currentPos = currentPos;
  }
  
  setPossibleMoves(moves: PossibleMoves) {
    this.possibleMoves = moves;
  }
}
