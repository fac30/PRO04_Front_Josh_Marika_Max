import { useEffect, useState } from 'react';
import TotalPrice from '../Cart-components/TotalPrice';
import Quantifier from '../Cart-components/Quantifier';
import { Vinyl } from '../utils/types';


interface ShopCartProps {
  setCartCount: (count: number) => void;
}

const ShopCart = ({ setCartCount }: ShopCartProps) => {
  const [cartItems, setCartItems] = useState<Vinyl[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      const items = JSON.parse(savedCart);
      setCartItems(items);
      calculateTotal(items);
      const newCartCount = items.reduce((acc: number, item: Vinyl) => acc + item.quantity, 0);
      setCartCount(newCartCount);
    }
  }, [setCartCount]);

  const calculateTotal = (items: Vinyl[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const increaseQuantity = (vinylId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === vinylId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartState(updatedCart);
  };

  const decreaseQuantity = (vinylId: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === vinylId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // Remove item if quantity is less than 1
        }
        return item;
      })
      .filter((item): item is Vinyl => item !== null);
    updateCartState(updatedCart);
  };

  const updateCartState = (updatedCart: Vinyl[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    const newCartCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
  };

  return (
    <section 
    id="cart"
    className="bg-background-light p-4 shadow rounded-t-lg"
    >
      <h2 className="text-4xl font-bold mb-4 text-text-primary text-center">Shopping Cart</h2>

      <div 
      id="container"
      className="max-w-6xl mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-text-primary text-center">Your cart is empty</p>
        ) : (
          cartItems.map((vinyl) => (
            <div 
            id="vinyl"
            className="flex items-center justify-between p-4 mb-4 border border-gray-300 rounded-md bg-background-default shadow-sm"
            key={vinyl.id}>
              <img src={vinyl.image_url} alt={vinyl.title} 
              className="w-24 h-24 object-cover rounded-lg"/>
                <div className="ml-4 flex-grow">
            <h3 className="text-lg font-medium text-text-primary">{vinyl.title}</h3>
            <p className="text-text-secondary">{vinyl.artist}</p>
            <p className="font-bold text-dark">£{vinyl.price.toFixed(2)}</p>
          </div>
              <Quantifier
                quantity={vinyl.quantity}
                onIncrease={() => increaseQuantity(vinyl.id)}
                onDecrease={() => decreaseQuantity(vinyl.id)}
              />
            </div>
          ))
        )}
      </div>

      <div className="border-t border-b border-gray-300 py-4 flex justify-end max-w-6xl mx-auto">
        <p className="text-lg font-bold">
          Total: <span className="text-2xl font-semibold text-text-dark">£{totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </section>
  );
};

export default ShopCart;
