interface TotalPrioceProps {
    amount: number;
}

const TotalPrice = ({amount}: TotalPrioceProps) => {
    return (
        <div 
        id="total"
        className=" text-center py-6 text-black mt-6 rounded-md">
        <p className=" text-2xl font-semibold">Total Price: £{amount.toFixed(2)}</p>
      </div>
    )
        
    
};

export default TotalPrice;