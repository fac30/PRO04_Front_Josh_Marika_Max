import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { Vinyl } from "../utils/types";

// Define the shape of the cart state
interface CartState {
  cartItems: Vinyl[];
  cartCount: number;
  totalPrice: number;
}

// Define the shape of the actions
interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "DECREASE_QUANTITY";
  payload: Vinyl;
}

// Create a context with undefined initial value
const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

// Define the initial state of the cart
const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("shoppingCart") || "[]"),
  cartCount: 0,
  totalPrice: 0,
};

// Reducer function to handle cart actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItemIndex >= 0) {
        // If item is already in the cart, increase its quantity
        updatedItems = state.cartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item is not in the cart, add it with quantity 1
        updatedItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      // Calculate new cart count and total price
      const newCartCount = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      const newTotalPrice = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return { cartItems: updatedItems, cartCount: newCartCount, totalPrice: newTotalPrice };

    case "DECREASE_QUANTITY":
      const decreasedItems = state.cartItems
        .map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0

      // Update cart count and total price
      const decreasedCartCount = decreasedItems.reduce((acc, item) => acc + item.quantity, 0);
      const decreasedTotalPrice = decreasedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return { cartItems: decreasedItems, cartCount: decreasedCartCount, totalPrice: decreasedTotalPrice };

    default:
      return state;
  }
};

// Context provider component to wrap the app and provide cart state and dispatch
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Sync cart items with localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext easily
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
