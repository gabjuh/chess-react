import { Game } from '../models/game';

export class ChessService {
  private game: Game;

  constructor() {
    this.game = new Game();
  }

  getGameState() {
    return this.game.board;
  }

  getMovesForPiece(row: number, col: number) {
    const piece = this.game.board[row][col];
    if (!piece) {
      throw new Error('No piece at the specified location');
    }
    return this.game.getPossibleMoves(piece);
  }

  makeMove(from: [number, number], to: [number, number]) {
    return this.game.movePiece(from, to);
  }
}
