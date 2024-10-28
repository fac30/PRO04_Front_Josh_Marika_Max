import { useCartContext } from '../Context/Cart';

const CartSummary: React.FC = () => {
  const { state: { totalPrice } } = useCartContext();
  const remainingForFreeShipping = 35 - totalPrice;
  const deliveryCharge = totalPrice < 35 ? 5 : 0;
  const finalTotal = totalPrice + deliveryCharge;
  
    return (
      <div className="p-6 bg-background-light shadow-lg rounded-md">
        <h3 className="text-2xl font-semibold text-text-primary mb-4">Subtotal</h3>
        <p className="text-xl font-bold text-text-dark mb-4">£{totalPrice.toFixed(2)}</p>
  
        {remainingForFreeShipping > 0 && (
          <p className="text-sm text-red-600 mb-4">
            Add <span className="font-semibold">£{remainingForFreeShipping.toFixed(2)}</span> of eligible items to qualify for FREE UK Delivery.
          </p>
        )}
        
        
        {deliveryCharge > 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Delivery Charge: <span className="font-semibold">£{deliveryCharge.toFixed(2)}</span>
          </p>
        )}
  
       
        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-bold mb-4">Total: £{finalTotal.toFixed(2)}</p>
          <button
            className="w-full py-3 bg-accent hover:bg-background-footer text-white font-semibold rounded-lg transition duration-300 shadow-md"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
  };
  

export default CartSummary;
