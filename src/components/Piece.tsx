import { ChessPiece } from '../App';

interface Piece {
  piece: ChessPiece;
  coords: number[];
  isSelected: boolean;
  handlePieceClick: (coords: number[]) => void;
  isHighlighted: boolean;
  isMoveable: boolean;
  fieldSize: number;
}

const Piece: React.FC<Piece> = ({
  piece,
  coords,
  isSelected,
  handlePieceClick,
  isHighlighted,
  isMoveable,
  fieldSize
}) => {

  // This handler sets the clicked pieces coords, if there is one
  // and removes selection, if we click on an empty field
  const clickHandler = () => {
    handlePieceClick(piece ? coords : []);
    // Here should we add the method for moving the piece
    isHighlighted && console.log(`Move piece here: ${coords}`);
  }

  return (
    <div 
      onClick={clickHandler}
      style={{
        width: `${fieldSize}px`,
        height: `${fieldSize}px`
      }}
      className={`select-none border-[0px] border-opacity-0 relative text-white text-center box-border transition-all ease-in-out duration-150 ${piece ? 'cursor-pointer hover:bg-gray-400 hover:bg-opacity-30' : ''}  ${isHighlighted ? 'cursor-pointer before:bg-green-600 before:opacity-30 before:content-[""] before:w-full before:h-full before:block' : ''} `}>

      {/* Overlay for border */}
      <div className={`block absolute transition-all duration-150 ease-in-out ${isSelected ? isMoveable ? 'border-[9px] border-green-400' : 'border-[9px] border-orange-400' : ''} w-full h-full`}></div>

      {/* Piece with transition effects */}
      <span className={`block transition-all duration-150 ease-in-out ${isSelected && isMoveable  ? 'translate-y-[-4px] scale-[1.15] rotate-[8deg] drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]' : ''}`}>{piece}</span>

    </div>
  )
}

export default Piece