'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart
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

  // Save cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      increaseQty(product._id);
      return;
    }

    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    toast.success('Product added to cart');
  };

  // Increase quantity
  const increaseQty = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    toast.success('Quantity increased');
  };

  // Decrease quantity
  const decreaseQty = (_id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

    toast.success('Quantity decreased');
  };

  // Remove one product
  const removeItem = (_id) => {
    setCart((prev) => prev.filter((item) => item._id !== _id));

    toast.error('Product removed');
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  // Total items
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

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
