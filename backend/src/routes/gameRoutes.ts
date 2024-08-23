import express from 'express';

import { getGameState, getMovesForPiece, makeMove } from '../controllers/gameController';

const router = express.Router();

router.get('/game-state', getGameState);
router.get('/possible-moves/:row/:col', getMovesForPiece);
router.post('/move', makeMove);

export default router;
