import { createContext, useContext, useReducer, useEffect } from "react";
import { Vinyl } from "../utils/types";

interface CartState {
  cartItems: Vinyl[];
  cartCount: number;
  totalPrice: number;
}

interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: Vinyl;
}

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("shoppingCart") || "[]"),
  cartCount: 0,
  totalPrice: 0,
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItemIndex >= 0) {
        updatedItems = state.cartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      const newCartCount = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      const newTotalPrice = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return { cartItems: updatedItems, cartCount: newCartCount, totalPrice: newTotalPrice };

    case "REMOVE_FROM_CART":
      return state;

    default:
      return state;
  }
};


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

