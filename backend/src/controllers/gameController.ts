import { Request, Response } from 'express';

import { ChessService } from '../services/chessService';

const chessService = new ChessService();

export const getGameState = (req: Request, res: Response) => {
  try {
    const gameState = chessService.getGameState();
    res.json(gameState);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getGameStateMaK = (req: Request, res: Response) => {
  try {
    const gameState = chessService.getGameState();
    res.json(gameState);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getMovesForPiece = (req: Request, res: Response) => {
  const { row, col } = req.params;
  try {
    const possibleMoves = chessService.getMovesForPiece(Number(row), Number(col));
    res.json(possibleMoves);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const newState = [
    ["rook","knight","bishop","queen","king","bishop","knight","rook"],
    ["pawn","pawn","pawn","pawn","pawn","pawn","pawn","pawn"],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    ["PAWN",null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,"PAWN","PAWN","PAWN","PAWN","PAWN","PAWN","PAWN"],["ROOK","KNIGHT","BISHOP","QUEEN","KING","BISHOP","KNIGHT","ROOK"]
  ]

export const makeMove = (req: Request, res: Response) => {
  const { from, to } = req.body;
  console.log(req.body)
  try {
    const result = chessService.makeMove(from, to);
    res.json({ 
      success: result,
      board: newState
    });
    console.log(result)
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
