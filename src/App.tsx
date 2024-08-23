import './App.css';

import Board from './components/Board';

export type ChessBoardState = {
  state: ChessPiece[][]
}

// Use these chars instead of the names of the figures
export type ChessPiece = "♔" | "♕" | "♖" | "♗" | "♘" | "♙" | "♚" | "♛" | "♜" | "♝" | "♞" | "♟" | null;

// This object represents the current state of the board
// that we recieve from the api
const chessBoard: ChessBoardState = {
  state: [
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "♟", null, null],
    ["♟", "♟", "♟", "♟", "♟", null, "♟", "♟"],
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ]
}

function App() {

  return (
    <>
      <Board 
        gameState={chessBoard.state}
      />
    </>
  )
}

export default App
