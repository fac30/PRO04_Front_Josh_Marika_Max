import { useEffect, useState } from 'react'

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
        const savedCart = localStorage.getItem("shoppingCart");
        if(savedCart) {
            const items = JSON.parse(savedCart);
            setCartItems(items);
            calculateTotal(items);
            setCartCount(items.length);
        }
    }, []);

    const calculateTotal = (items: Product[]) => {
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const removeItem = (productId: number) => {
        const updateCart = cartItems.map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              // Decrease quantity
              return { ...item, quantity: item.quantity - 1 };
            }
            // Quantity is 1, item will be removed
            return null;
          }
          return item;
        })
        .filter((item) => item !== null);


        setCartItems(updateCart as Product[]);
        localStorage.setItem("shoppingCart", JSON.stringify(updateCart));
        calculateTotal(updateCart as Product[]);
        const newCartCount = (updateCart as Product[]).reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setCartCount(newCartCount);
      };
    

    return (
        <section className="cart">
          <h1>Shopping Cart</h1>
    
          <div className="container">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
                // change to localstore
              cartItems.map((product) => (  
                <div className="product" key={product.id}>
                  <img src={product.image_url} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>£{product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
    
          <div className="total">
            <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
          </div>
        </section>
      );
    };
 
export default ShopCart;