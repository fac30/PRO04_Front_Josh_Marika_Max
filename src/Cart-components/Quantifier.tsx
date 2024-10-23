interface QuantifierProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Quantifier = ({quantity, onIncrease, onDecrease}: QuantifierProps) => {
    return (
        <div className="quantity-controls">
            <button className="decrease-btn" onClick={onDecrease}>
                -
            </button>
            <span>{quantity}</span>
            <button className="increase-btn" onClick={onIncrease}>
                +
            </button>
        </div>
    );
};

export default Quantifier;