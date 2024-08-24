import express from 'express';

import { getGameState, getMovesForPiece, makeMove, reset } from '../controllers/gameController';

const router = express.Router();

router.get('/gameState', getGameState);
router.get('/selectPiece/:row/:col', getMovesForPiece);
router.post('/movePiece', makeMove);
router.get('/reset', reset);

export default router;
