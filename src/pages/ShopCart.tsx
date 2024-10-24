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

  const increaseQuantity = (VinylId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === VinylId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartState(updatedCart);
  };

  const decreaseQuantity = (VinylId: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === VinylId) {
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
      <h1 className="text-4xl font-bold mb-4 text-text-primary text-center">Shopping Cart</h1>

      <div 
      id="container"
      className="max-w-6xl mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-text-primary text-center">Your cart is empty</p>
        ) : (
          cartItems.map((Vinyl) => (
            <div 
            id="Vinyl"
            className="flex items-center justify-between p-4 mb-4 border border-gray-300 rounded-md bg-background-default shadow-sm"
            key={Vinyl.id}>
              <img src={Vinyl.image_url} alt={Vinyl.title} 
              className="w-24 h-24 object-cover rounded-lg"/>
                <div className="ml-4 flex-grow">
            <h3 className="text-lg font-medium text-text-primary">{Vinyl.title}</h3>
            <p className="text-text-secondary">{Vinyl.artist}</p>
            <p className="font-bold text-dark">£{Vinyl.price.toFixed(2)}</p>
          </div>
              <Quantifier
                quantity={Vinyl.quantity}
                onIncrease={() => increaseQuantity(Vinyl.id)}
                onDecrease={() => decreaseQuantity(Vinyl.id)}
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
