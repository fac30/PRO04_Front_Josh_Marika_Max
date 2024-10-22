import { useEffect, useState } from 'react'

interface Product {
    id: number;
    title: string;
    artist: string;
    price: number;
    image_url: string;
  }

const ShopCart = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const savedCart = localStorage.getItem("shoppingCart");
        if(savedCart) {
            const items = JSON.parse(savedCart);
            setCartItems(items);
            calculateTotal(items);
        }
    }, []);

    const calculateTotal = (items: Product[]) => {
        const total = items.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    };

    const removeItem = (productId: number) => {
        const updateCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updateCart);
        localStorage.setItem("shoppingCart", JSON.stringify(updateCart));
        calculateTotal(updateCart);
    }
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