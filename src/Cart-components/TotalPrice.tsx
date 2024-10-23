interface TotalPrioceProps {
    amount: number;
}

const TotalPrice = ({amount}: TotalPrioceProps) => {
    return (
        <div className="total">
        <h2>Total Price: £{amount.toFixed(2)}</h2>
      </div>
    )
        
    
};

export default TotalPrice;