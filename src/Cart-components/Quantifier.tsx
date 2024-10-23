interface QuantifierProps {
    quantity: number;
    onIcrease: () => void;
    onDecrease: () => void;
}

const Quantifier = ({quantity, onIcrease, onDecrease}: QuantifierProps) => {
    return (
        <div className="quantity-controls">
            <button className="decrease-btn" onClick={onDecrease}>
                -
            </button>
            <span>{quantity}</span>
            <button className="increase-btn" onClick={onIcrease}>
                +
            </button>
        </div>
    );
};

export default Quantifier;