import { ChessPiece } from '../models/chessPiece';

export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';

export type PieceColor = 'white' | 'black';

export type PieceChar = "♔" | "♕" | "♖" | "♗" | "♘" | "♙" | "♚" | "♛" | "♜" | "♝" | "♞" | "♟" ;

export type PossibleMoves = [number, number][]

export type PieceObjType = {
  type: PieceType,
  color: PieceColor,
  char: PieceChar,
  currentPos: number[],
  possibleMoves: PossibleMoves,
}

export type PieceObjWrappedType = {
  obj: PieceObjType;
  numberOfInstances: number;
  defaultPositions: number[][];
};

export interface BoardType {
  gameState: ChessPiece[][]
}