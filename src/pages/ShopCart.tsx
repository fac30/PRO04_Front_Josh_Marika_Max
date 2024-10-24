import { useCart } from '../Context/CartContext';
import TotalPrice from '../Cart-components/TotalPrice';
import Quantifier from '../Cart-components/Quantifier';


const ShopCart = () => {
  //  to be completed

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