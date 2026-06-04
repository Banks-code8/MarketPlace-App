'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // LOAD CART FROM LOCAL STORAGE
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch {
        setCart([]);
      }
    }
  }, []);

  // SAVE CART TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

      toast.success('Quantity increased');
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);

      toast.success('Product added to cart');
    }
  };

  // INCREASE
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    toast.success('Quantity increased');
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

    toast('Quantity decreased');
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));

    toast.error('Item removed');
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
    toast('Cart cleared');
  };

  // CART COUNT
  const cartCount = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  // TOTAL PRICE
  const total = cart.reduce((sum, item) => {
    const price = Number(item?.cost?.replace?.('$', '') || 0);
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        cartCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
