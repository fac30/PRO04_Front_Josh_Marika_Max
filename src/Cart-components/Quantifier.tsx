interface QuantifierProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Quantifier = ({quantity, onIncrease, onDecrease}: QuantifierProps) => {
    return (
        <div 
        id="quantifier"
        className=" flex items-center space-x-2">
            <button 
            className="text-white rounded font-bold hover:bp-2 bg-accent text-white font-bold rounded hover:bg-accent-light transition" 
            onClick={onDecrease}>
                -
            </button>
            <span className="text-lg ">{quantity}</span>
            <button 
            className="text-white rounded font-bold hover:bp-2 bg-accent text-white font-bold rounded hover:bg-accent-light transition"  
            onClick={onIncrease}>
                +
            </button>
        </div>
    );
};

export default Quantifier;