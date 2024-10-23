interface TotalPriceProps {
    amount: number;
  }
  
  const TotalPrice = ({ amount }: TotalPriceProps) => {
    return (
      <div className="border-t border-b border-gray-300 py-4 flex justify-end pr-4">
        <p className="text-lg font-bold">
          Total: <span className="text-2xl font-semibold text-text-dark">£{amount.toFixed(2)}</span>
        </p>
      </div>
    );
  };
  
  export default TotalPrice;
  