import { createContext, useContext, useState, useEffect } from 'react';


interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
  quantity: number;
}


interface CartContextType {
  cartItems: Product[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// taking from the ShopCArT
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