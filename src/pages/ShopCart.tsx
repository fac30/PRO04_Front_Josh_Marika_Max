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
    <section className="cart">
      <h1>Shopping Cart</h1>

      <div className="container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image_url} alt={product.title} />
              <h3>{product.title}</h3>
              <p>£{product.price.toFixed(2)}</p>
              <Quantifier
                quantity={product.quantity}
                onIncrease={() => increaseQuantity(product.id)}
                onDecrease={() => decreaseQuantity(product.id)}
              />
            </div>
          ))
        )}
      </div>

      <TotalPrice amount={totalPrice} />
    </section>
  );
};

export default ShopCart;
