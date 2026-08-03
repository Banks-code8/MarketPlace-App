'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import {
  getCart,
  addToCart as addToCartService,
  updateCartItem,
  removeFromCart as removeFromCartService,
} from '@/services/cartService';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================
  // FETCH CART
  // =====================

  const fetchCart = async () => {
    try {
      setLoading(true);

      const res = await getCart();

      if (!res.success) {
        setCart([]);
        return;
      }

      setCart(res.data.data.items ?? []);
    } catch (error) {
      console.error(error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // =====================
  // ADD TO CART
  // =====================

  const addToCart = async (productId) => {
    const res = await addToCartService(productId, 1);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    setCart(res.data?.data.items || []);

    toast.success('Product added to cart');
  };

  // =====================
  // INCREASE QUANTITY
  // =====================

  const increaseQty = async (productId) => {
    const item = cart.find((item) => item.productId._id === productId);

    if (!item) return;

    const res = await updateCartItem(productId, item.quantity + 1);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    setCart(res.data.data.items ?? []);
  };

  // =====================
  // DECREASE QUANTITY
  // =====================

  const decreaseQty = async (productId) => {
    const item = cart.find((item) => item.productId._id === productId);

    if (!item) return;

    if (item.quantity === 1) {
      return removeItem(productId);
    }

    const res = await updateCartItem(productId, item.quantity - 1);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    setCart(res.data.data.items ?? []);
  };

  // =====================
  // REMOVE ITEM
  // =====================

  const removeItem = async (productId) => {
    const res = await removeFromCartService(productId);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    setCart(res.data.data.items ?? []);
    toast.success('Item removed');
  };

  // =====================
  // CLEAR CART
  // =====================

  const clearCart = () => {
    setCart([]);
  };

  // =====================
  // TOTALS
  // =====================

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(
        item.productId?.discountPrice ??
          item.productId?.price ??
          item.priceAtAdd
      ) *
        item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
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
