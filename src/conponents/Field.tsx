import type { ChessPiece } from '../App';

interface FieldType  {
  piece: ChessPiece;
  isDark: boolean;
  coords: number[];
  isSelected: boolean;
  handlePieceClick: (coords: number[]) => void;
  isHighlighted: boolean;
  isShowingChords: boolean;
}

const Field: React.FC<FieldType> = ({
  piece,
  isDark,
  coords,
  isSelected,
  handlePieceClick,
  isHighlighted,
  isShowingChords
}) => {
  
  return (
    <div 
      onClick={() => piece && handlePieceClick(coords)}
      className={`select-none relative w-20 h-20 text-white text-center box-border transition-all ease-in-out duration-150 ${piece ? 'cursor-pointer hover:bg-gray-400' : ''} ${isDark ? 'bg-gray-600' : 'bg-gray-500'} ${isHighlighted ? '!bg-green-800 opacity-60' : ''} ${isSelected ? 'border-[3px] border-green-400' : ''}`}>

      {isShowingChords && <div className="absolute text-[.8rem] right-1 top-1">{`[${coords[0]}/${coords[1]}]`}</div>}

      <span className={`block transition-all duration-200 ease-in-out ${isSelected ? '' : ''}`}>{piece}</span>

    </div>
  )
}

export default Field