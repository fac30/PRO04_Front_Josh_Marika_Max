import { useEffect, useState } from 'react';
import TotalPrice from '../Cart-components/TotalPrice';
import Quantifier from '../Cart-components/Quantifier';


interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface ShopCartProps {
  setCartCount: (count: number) => void;
}

const ShopCart = ({ setCartCount }: ShopCartProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      const items = JSON.parse(savedCart);
      setCartItems(items);
      calculateTotal(items);
      const newCartCount = items.reduce((acc: number, item: Product) => acc + item.quantity, 0);
      setCartCount(newCartCount);
    }
  }, [setCartCount]);

  const calculateTotal = (items: Product[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartState(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // Remove item if quantity is less than 1
        }
        return item;
      })
      .filter((item): item is Product => item !== null);
    updateCartState(updatedCart);
  };

  const updateCartState = (updatedCart: Product[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    const newCartCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
  };

  return (
      <section 
        id="cart"
        className="bg-background-light p-4 shadow rounded-t-lg flex-grow"
      >
        <h1 className="text-4xl font-bold mb-4 text-text-primary text-center">Shopping Cart</h1>
      
        <div id="container" 
        className="max-w-6xl mx-auto ">
          {cartItems.length === 0 ? (
            <p className="text-text-primary text-center">Your cart is empty</p>
          ) : (
            cartItems.map((product) => (
              <div 
                id="product"
                className="flex items-center justify-between p-4 mb-4 border border-gray-300 rounded-md bg-background-default shadow-sm"
                key={product.id}
              >
                <img 
                  src={product.image_url} 
                  alt={product.title} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-medium text-text-primary">{product.title}</h3>
                  <p className="text-text-secondary">{product.artist}</p>
                  <p className="font-bold text-dark">£{product.price.toFixed(2)}</p>
                </div>
                <Quantifier
                  quantity={product.quantity}
                  onIncrease={() => increaseQuantity(product.id)}
                  onDecrease={() => decreaseQuantity(product.id)}
                />
              </div>
            ))
          )}
        </div>
  
        <div className="max-w-6xl mx-auto flex">
        {/* <div className="border-t border-b border-gray-300 py-4 flex justify-end max-w-6xl mx-auto"> */}
          <p className="text-lg font-bold">
            Total: <span className="text-2xl font-semibold text-text-dark">£{totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </section>
  );
};  

export default ShopCart;