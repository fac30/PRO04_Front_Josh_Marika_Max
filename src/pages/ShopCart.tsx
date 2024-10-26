import Quantifier from '../Cart-components/Quantifier';
import { useCartContext } from '../Context/Cart'; 
import CartSummary from '../Cart-components/CartSummary';

const ShopCart = () => {
  const { state: { cartItems }, dispatch } = useCartContext();

  
  const increaseQuantity = (vinylId: number) => {
    const product = cartItems.find(item => item.id === vinylId);
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };


  const decreaseQuantity = (vinylId: number) => {
    const product = cartItems.find(item => item.id === vinylId);
    if (product) {
      dispatch({ type: "DECREASE_QUANTITY", payload: product });
    }
  };

  return (
    <section className="bg-background-light p-4 shadow rounded-t-lg max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-text-primary text-center">Shopping Cart</h2>

      <div className="flex flex-col md:flex-row md:space-x-8">
        
        <div className="flex-grow md:w-2/3 lg:w-3/4">
          <div id="container" className="max-w-6xl mx-auto">
            {cartItems.length === 0 ? (
              <p className="text-text-primary text-center">Your cart is empty</p>
            ) : (
              cartItems.map((vinyl) => (
                <div
                  id="vinyl"
                  className="flex items-center justify-between p-4 mb-4 border border-gray-300 rounded-md bg-background-default shadow-sm"
                  key={vinyl.id}>
                  <img src={vinyl.image_url} alt={vinyl.title} className="w-24 h-24 object-cover rounded-lg"/>
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
        </div>

        
        <aside className="md:w-1/3 lg:w-1/4 sticky top-4 self-start">
          <CartSummary />
        </aside>
      </div>
    </section>
  );
};

export default ShopCart;
