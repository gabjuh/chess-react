
interface Field  {
  isDark: boolean;
  coords: number[];
  isShowingChords: boolean;
  fieldSize: number;
}

const Field: React.FC<Field> = ({
  isDark,
  coords,
  isShowingChords,
  fieldSize
}) => {
  
  return (
    <div 
      style={{
        width: `${fieldSize}px`,
        height: `${fieldSize}px`
      }}
      className={`select-none relative text-white text-center box-border transition-all ease-in-out duration-150 ${isDark ? 'bg-gray-600' : 'bg-gray-500'} `}>

      {/* It shows coords for dev purposes, if enabled */}
      {isShowingChords && <div className="absolute text-[.8rem] right-1 top-1">{`[${coords[0]}/${coords[1]}]`}</div>}
    </div>
  )
}

export default Field