import type { ChessPiece } from '../App';

interface FieldType  {
  piece: ChessPiece;
  isDark: boolean;
  coords: number[];
  isSelected: boolean;
  handlePieceClick: (coords: number[]) => void;
  isHighlighted: boolean;
  isShowingChords: boolean;
  isMoveable: boolean;
}

const Field: React.FC<FieldType> = ({
  piece,
  isDark,
  coords,
  isSelected,
  handlePieceClick,
  isHighlighted,
  isShowingChords,
  isMoveable,
}) => {

  const clickHandler = () => {
    handlePieceClick(piece ? coords : []);
    isHighlighted && console.log(`Move piece here: ${coords}`);
  }
  
  return (
    <div 
      onClick={clickHandler}
      className={`select-none relative w-20 h-20 text-white text-center box-border transition-all ease-in-out duration-150 ${piece ? 'cursor-pointer hover:bg-gray-400' : ''} ${isDark ? 'bg-gray-600' : 'bg-gray-500'} ${isHighlighted ? 'cursor-pointer before:bg-green-600 before:opacity-30 before:content-[""] before:w-full before:h-full before:block' : ''} `}>

      {/* It shows coords for dev purposes, if enabled */}
      {isShowingChords && <div className="absolute text-[.8rem] right-1 top-1">{`[${coords[0]}/${coords[1]}]`}</div>}

      {/* Overlay for border */}
      <div className={`block absolute transition-all duration-150 ease-in-out ${isSelected ? isMoveable ? 'border-[9px] border-green-400' : 'border-[9px] border-orange-400' : ''} w-full h-full`}></div>

      {/* Piece with transition effects */}
      <span className={`block transition-all duration-150 ease-in-out ${isSelected && isMoveable  ? 'translate-y-[-4px] scale-[1.15] rotate-[8deg] drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]' : ''}`}>{piece}</span>

    </div>
  )
}

export default Field