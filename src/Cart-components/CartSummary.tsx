import { useCartContext } from '../Context/Cart';
import { useEffect, useState } from 'react';

type ShippingOption = {
  id: number;
  shipping_option: string;
  price: number;
  lead_time_days: number;
};

const CartSummary: React.FC = () => {
  const { state: { totalPrice } } = useCartContext();
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption | null>(null);
  const remainingForFreeShipping = 35 - totalPrice;

  useEffect(() => {
    const fetchShippingOptions = async () => {
      try {
        const response = await fetch('http://ec2-18-175-142-8.eu-west-2.compute.amazonaws.com/shipping-options');
        const data: ShippingOption[] = await response.json();
        setShippingOptions(data);
        if (data.length > 0) {
          setSelectedShipping(data[0]);
        }
      } catch (error) {
        console.error('Error fetching shipping options:', error);
      }
    };
    fetchShippingOptions();
  }, []);

  const handleShippingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(event.target.value);
    const option = shippingOptions.find(option => option.id === selectedId);
    setSelectedShipping(option || null);
  };


  const deliveryCharge = selectedShipping && totalPrice < 35 ? selectedShipping.price : 0;
  const finalTotal = totalPrice + deliveryCharge;

  
    return (
      <div className="p-6 bg-background-default shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md">
        <h3 className="text-2xl font-semibold text-text-primary mb-4">Subtotal</h3>
        <p className="text-xl font-bold text-text-dark mb-4">£{totalPrice.toFixed(2)}</p>
  
        {remainingForFreeShipping > 0 && (
          <p className="text-sm text-red-600 mb-4">
            Add <span className="font-semibold">£{remainingForFreeShipping.toFixed(2)}</span> of eligible items to qualify for FREE UK Delivery.
          </p>
        )}
        
        
        <label className='block mb-4'>
          <span className='text-sm font-semibold text-text-primary'>Choose Shipping Option:</span> <br />
          <select
          className='mt-4 p-2 border rounded-md max-w-[100%]'
          onChange={handleShippingChange}
          value={selectedShipping?.id || ''} >
            
            
            {shippingOptions.map(opt => (
              <option key={opt.id} value={opt.id}>
                {opt.shipping_option} - £{opt.price} (Lead time: {opt.lead_time_days} days)
                </option>
              ))}
              </select>
              </label>

        
        
        {deliveryCharge > 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Delivery Charge: <span className="font-semibold">£{deliveryCharge.toFixed(2)}</span>
          </p>
        )}
  
       
        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-bold mb-4">Total: £{finalTotal.toFixed(2)}</p>
          <button
            className="w-full py-3 bg-background-light hover:bg-background-footer text-white font-semibold rounded-lg transition duration-300 shadow-md"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
  };
  

export default CartSummary;
