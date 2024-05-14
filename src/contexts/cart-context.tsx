'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: number) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.productId === productId
      );

      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { productId, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
