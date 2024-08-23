import express from 'express';

import { getGameState, getMovesForPiece, makeMove } from '../controllers/gameController';

const router = express.Router();

router.get('/game-state', getGameState);
router.get('/selectPiece/:row/:col', getMovesForPiece);
router.post('/movePiece', makeMove);

export default router;
