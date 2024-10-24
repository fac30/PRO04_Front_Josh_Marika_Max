interface QuantifierProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Quantifier = ({quantity, onIncrease, onDecrease}: QuantifierProps) => {
    return (
        <div 
        id="quantifier"
        className=" flex items-center space-x-0 border border-gray shadow-md">
            <button
            className="rounded text-white font-bold bg-background-footer text-white hover:bg-accent-light transition w-12 h-12 flex justify-center items-center" 
            onClick={onDecrease}>
                -
            </button>
            <span className="rounded text-lg bg-white w-12 h-12 flex justify-center items-center">{quantity}</span>
            <button 
            className="rounded text-white font-bold bg-background-footer text-white hover:bg-accent-light transition w-12 h-12 flex justify-center items-center"  
            onClick={onIncrease}>
                +
            </button>
        </div>
    );
};

export default Quantifier;