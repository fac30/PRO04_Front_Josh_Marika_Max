import QuantifierBtn from "./QuantifierBtn";

interface QuantifierProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Quantifier = ({quantity, onIncrease, onDecrease}: QuantifierProps) => {
    return (
        <div 
          id="quantifier" 
          className="flex items-center space-x-0 border border-gray shadow-md"
        >
          <QuantifierBtn 
            text="-" 
            onClick={onDecrease} 
          />
          <span className="rounded text-lg bg-white w-12 h-12 flex justify-center items-center">
            {quantity}
          </span>
          <QuantifierBtn 
            text="+" 
            onClick={onIncrease} 
          />
        </div>
      );
    };
    

export default Quantifier;