import Quantifier from '../Cart-components/Quantifier';
// import { Vinyl } from '../utils/types';
import { useCartContext } from '../Context/Cart';

const ShopCart = () => {
  const { state: { cartItems, totalPrice }, dispatch } = useCartContext();

  const increaseQuantity = (vinylId: number) => {
    const product = cartItems.find(item => item.id === vinylId);
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  const decreaseQuantity = (vinylId: number) => {
    const product = cartItems.find(item => item.id === vinylId);
    if (product && product.quantity > 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }
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
