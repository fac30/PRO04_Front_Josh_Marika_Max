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