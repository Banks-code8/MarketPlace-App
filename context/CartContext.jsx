// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// import {
//   getCart,
//   addToCart as addToCartService,
//   updateCartItem,
//   removeFromCart as removeFromCartService,
// } from '@/services/cartService';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // =====================
//   // FETCH CART
//   // =====================

//   const fetchCart = async () => {
//     try {
//       setLoading(true);

//       const res = await getCart();

//       if (!res.success) {
//         setCart([]);
//         return;
//       }

//       setCart(res.data.data.items ?? []);
//     } catch (error) {
//       console.error(error);
//       setCart([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   // =====================
//   // ADD TO CART
//   // =====================

//   const addToCart = async (productId) => {
//     const res = await addToCartService(productId, 1);

//     if (!res.success) {
//       toast.error(res.message);
//       return;
//     }

//     setCart(res.data?.data.items || []);

//     toast.success('Product added to cart');
//   };

//   // =====================
//   // INCREASE QUANTITY
//   // =====================

//   const increaseQty = async (productId) => {
//     const item = cart.find((item) => item.productId._id === productId);

//     if (!item) return;

//     const res = await updateCartItem(productId, item.quantity + 1);

//     if (!res.success) {
//       toast.error(res.message);
//       return;
//     }

//     setCart(res.data.data.items ?? []);
//   };

//   // =====================
//   // DECREASE QUANTITY
//   // =====================

//   const decreaseQty = async (productId) => {
//     const item = cart.find((item) => item.productId._id === productId);

//     if (!item) return;

//     if (item.quantity === 1) {
//       return removeItem(productId);
//     }

//     const res = await updateCartItem(productId, item.quantity - 1);

//     if (!res.success) {
//       toast.error(res.message);
//       return;
//     }

//     setCart(res.data.data.items ?? []);
//   };

//   // =====================
//   // REMOVE ITEM
//   // =====================

//   const removeItem = async (productId) => {
//     const res = await removeFromCartService(productId);

//     if (!res.success) {
//       toast.error(res.message);
//       return;
//     }

//     setCart(res.data.data.items ?? []);
//     toast.success('Item removed');
//   };

//   // =====================
//   // CLEAR CART
//   // =====================

//   const clearCart = () => {
//     setCart([]);
//   };

//   // =====================
//   // TOTALS
//   // =====================

//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   const total = cart.reduce(
//     (sum, item) =>
//       sum +
//       Number(
//         item.productId?.discountPrice ??
//           item.productId?.price ??
//           item.priceAtAdd
//       ) *
//         item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         loading,
//         fetchCart,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeItem,
//         clearCart,
//         cartCount,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import {
  getCart,
  addToCart as addToCartService,
  updateCartItem,
  removeFromCart as removeFromCartService,
} from '@/services/cartService';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // =====================
  // FETCH CART
  // =====================

  const fetchCart = async () => {
    try {
      setLoading(true);

      const res = await getCart();

      console.log('GET CART:', res);

      if (!res.success) {
        setCart([]);
        return [];
      }

      const items = res.data?.data?.items ?? [];

      setCart(items);

      return items;
    } catch (error) {
      console.error('FETCH CART ERROR:', error);
      setCart([]);
      return [];
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
    try {
      setUpdating(true);

      const res = await addToCartService(productId, 1);

      console.log('ADD CART:', res);

      if (!res.success) {
        toast.error(res.message || 'Failed to add to cart');
        return false;
      }

      const items = res.data?.data?.items ?? [];

      setCart(items);

      toast.success('Product added to cart');

      return true;
    } catch (error) {
      console.error('ADD CART ERROR:', error);
      toast.error('Failed to add product to cart');

      return false;
    } finally {
      setUpdating(false);
    }
  };

  // =====================
  // FIND CART ITEM
  // =====================

  const findCartItem = (productId) => {
    return cart.find((item) => {
      const id = item?.productId?._id ?? item?.productId;

      return String(id) === String(productId);
    });
  };

  // =====================
  // INCREASE QUANTITY
  // =====================

  const increaseQty = async (productId) => {
    const item = findCartItem(productId);

    if (!item) return;

    try {
      setUpdating(true);

      const res = await updateCartItem(productId, item.quantity + 1);

      if (!res.success) {
        toast.error(res.message || 'Failed to update cart');
        return;
      }

      setCart(res.data?.data?.items ?? []);
    } catch (error) {
      console.error('INCREASE CART ERROR:', error);
      toast.error('Failed to update cart');
    } finally {
      setUpdating(false);
    }
  };

  // =====================
  // DECREASE QUANTITY
  // =====================

  const decreaseQty = async (productId) => {
    const item = findCartItem(productId);

    if (!item) return;

    if (item.quantity === 1) {
      await removeItem(productId);
      return;
    }

    try {
      setUpdating(true);

      const res = await updateCartItem(productId, item.quantity - 1);

      if (!res.success) {
        toast.error(res.message || 'Failed to update cart');
        return;
      }

      setCart(res.data?.data?.items ?? []);
    } catch (error) {
      console.error('DECREASE CART ERROR:', error);
      toast.error('Failed to update cart');
    } finally {
      setUpdating(false);
    }
  };

  // =====================
  // REMOVE ITEM
  // =====================

  const removeItem = async (productId) => {
    try {
      setUpdating(true);

      const res = await removeFromCartService(productId);

      if (!res.success) {
        toast.error(res.message || 'Failed to remove item');
        return;
      }

      setCart(res.data?.data?.items ?? []);

      toast.success('Item removed');
    } catch (error) {
      console.error('REMOVE CART ERROR:', error);
      toast.error('Failed to remove item');
    } finally {
      setUpdating(false);
    }
  };

  // =====================
  // CLEAR CART
  // =====================

  const clearCart = () => {
    setCart([]);
  };

  // =====================
  // TOTAL ITEMS
  // =====================

  const cartCount = cart.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  );

  // =====================
  // TOTAL PRICE
  // =====================

  const total = cart.reduce((sum, item) => {
    const product = item?.productId;

    const price = Number(
      product?.effectivePrice ??
        product?.discountPrice ??
        product?.price ??
        item?.priceAtAdd ??
        0
    );

    return sum + price * Number(item.quantity || 0);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        updating,
        fetchCart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        findCartItem,
        cartCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }

  return context;
};
