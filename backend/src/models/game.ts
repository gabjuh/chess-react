import { ChessPiece, PieceObjType } from './chessPiece';

type PieceObjWrappedType = {
  obj: PieceObjType;
  numberOfInstances: number;
  defaultPositions: number[][];
};

export type ChessPieceMaK = 
  'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn' | 'ROOK' | 'KNIGHT' | 'BISHOP' | 'QUEEN' | 'KING' | 'PAWN' | null;

const Pieces: PieceObjWrappedType[] = [
  {
    obj: {
      type: "pawn",
      color: "white",
      char: "♟",
      currentPos: [],
    },
    numberOfInstances: 8,
    defaultPositions: [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
    ],
  },
  {
    obj: {
      type: "pawn",
      color: "white",
      char: "♟",
      currentPos: [],
    },
    numberOfInstances: 8,
    defaultPositions: [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
    ],
  },
];

export class Game {
  board: {
    board: ChessPieceMaK[][];
    whiteTurn: boolean
  };

  constructor() {
    // this.board = this.initializeBoard();
    this.board = {
      board: [
        [
          "rook",
          "knight",
          "bishop",
          "queen",
          "king",
          "bishop",
          "knight",
          "rook",
        ],
        ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ["PAWN", "PAWN", "PAWN", "PAWN", "PAWN", "PAWN", "PAWN", "PAWN"],
        [
          "ROOK",
          "KNIGHT",
          "BISHOP",
          "QUEEN",
          "KING",
          "BISHOP",
          "KNIGHT",
          "ROOK",
        ],
      ],
      whiteTurn: true,
    };
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
    board[0][0] = new ChessPiece("rook", "white", "♜", [0, 0]);
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


  private generateRandomNumberBetween(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPossibleMoves(piece: string): [number, number][] {
    const possibleMoves: [number, number][] = [];
    let uniqueMoves: [number, number][] = [];

    while (possibleMoves.length < 7) {
      const randomCoords: [number, number] = [
        this.generateRandomNumberBetween(0, 7),
        this.generateRandomNumberBetween(0, 7),
      ];

      possibleMoves.push(randomCoords);

      // Remove duplicates
      uniqueMoves = possibleMoves.filter(
        (move, index) => possibleMoves.indexOf(move) === index
      );
    }

    return uniqueMoves;
  }

  movePiece(from: [number, number], to: [number, number]): boolean {
    // TODO: Implement move validation and execution
    return true;
  }
}
