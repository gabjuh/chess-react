import { ChessPiece } from './chessPiece';

export class Game {
  board: ChessPiece[][];

  constructor() {
    this.board = this.initializeBoard();
  }

  private initializeBoard(): ChessPiece[][] {
    // Logic to initialize the chess board with pieces
    // For simplicity, let's initialize with empty board
    const board: ChessPiece[][] = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    // Initialize pawns
    for (let i = 0; i < 8; i++) {
      board[1][i] = new ChessPiece("pawn", "white", "♟", [1, i]);
      board[6][i] = new ChessPiece("pawn", "black", "♙", [6, i]);
    }

    // Initialize other pieces
    // Rooks
    // board[0][0] = new ChessPiece("rook", "white", "♜", [0, 0]);
    board[0][7] = new ChessPiece("rook", "white", "♜", [0, 7]);
    board[7][0] = new ChessPiece("rook", "black", "♖", [3, 0]);
    board[7][7] = new ChessPiece("rook", "black", "♖", [7, 7]);

    // Knights
    board[0][1] = new ChessPiece("knight", "white", "♞", [0, 1]);
    board[0][6] = new ChessPiece("knight", "white", "♞", [0, 6]);
    board[7][1] = new ChessPiece("knight", "black", "♘", [7, 1]);
    board[7][6] = new ChessPiece("knight", "black", "♘", [7, 6]);

    // Bishops
    board[0][2] = new ChessPiece("bishop", "white", "♝", [0, 2]);
    board[0][5] = new ChessPiece("bishop", "white", "♝", [0, 5]);
    board[7][2] = new ChessPiece("bishop", "black", "♗", [7, 2]);
    board[7][5] = new ChessPiece("bishop", "black", "♗", [7, 5]);

    // Queens
    board[0][3] = new ChessPiece("queen", "white", "♛", [0, 3]);
    board[7][3] = new ChessPiece("queen", "black", "♕", [7, 3]);

    // Kings
    board[0][4] = new ChessPiece("king", "white", "♚", [0, 4]);
    board[7][4] = new ChessPiece("king", "black", "♔", [7, 4]);

    return board;
  }

  getPossibleMoves(piece: ChessPiece): [number, number][] {
    // TODO: Implement logic to calculate possible moves
    return [];
  }

  movePiece(from: [number, number], to: [number, number]): boolean {
    // TODO: Implement move validation and execution
    return true;
  }
}
