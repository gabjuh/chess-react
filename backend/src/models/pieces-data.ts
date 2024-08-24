import { PieceObjWrappedType } from '../types/types';

export const piecesData: PieceObjWrappedType[] = [
  {
    obj: {
      type: "pawn",
      color: "white",
      char: "♟",
      currentPos: [],
      possibleMoves: [],
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
      color: "black",
      char: "♙",
      currentPos: [],
      possibleMoves: [],
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
      type: "rook",
      color: "white",
      char: "♜",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 2,
    defaultPositions: [
      [0, 0],
      [0, 7],
    ],
  },
  {
    obj: {
      type: "rook",
      color: "black",
      char: "♖",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 2,
    defaultPositions: [
      [7, 0],
      [7, 7],
    ],
  },
  {
    obj: {
      type: "knight",
      color: "white",
      char: "♞",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 2,
    defaultPositions: [
      [0, 1],
      [0, 6],
    ],
  },
  {
    obj: {
      type: "knight",
      color: "black",
      char: "♘",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 2,
    defaultPositions: [
      [7, 1],
      [7, 6],
    ],
  },
  {
    obj: {
      type: "bishop",
      color: "white",
      char: "♝",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 2,
    defaultPositions: [
      [0, 2],
      [0, 5],
    ],
  },
  {
    obj: {
      type: "bishop",
      color: "black",
      char: "♗",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 2,
    defaultPositions: [
      [7, 2],
      [7, 5],
    ],
  },
  {
    obj: {
      type: "queen",
      color: "white",
      char: "♛",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 1,
    defaultPositions: [[0, 3]],
  },
  {
    obj: {
      type: "queen",
      color: "black",
      char: "♕",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 1,
    defaultPositions: [[7, 3]],
  },
  {
    obj: {
      type: "king",
      color: "white",
      char: "♚",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 1,
    defaultPositions: [[0, 4]],
  },
  {
    obj: {
      type: "king",
      color: "black",
      char: "♔",
      currentPos: [],
      possibleMoves: [],
    },
    numberOfInstances: 1,
    defaultPositions: [[7, 4]],
  },
];