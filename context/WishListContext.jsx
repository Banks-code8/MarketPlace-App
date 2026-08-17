// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem('wishlist')) || [];

//     setWishlist(saved);
//   }, []);

//   const addToWishlist = (product) => {
//     const exists = wishlist.some((item) => item._id === product._id);

//     if (exists) return;

//     const updated = [...wishlist, product];

//     setWishlist(updated);

//     localStorage.setItem('wishlist', JSON.stringify(updated));
//   };

//   const removeFromWishlist = (id) => {
//     const updated = wishlist.filter((item) => item._id !== id);

//     setWishlist(updated);

//     localStorage.setItem('wishlist', JSON.stringify(updated));
//   };

//   const isWishlisted = (id) => {
//     return wishlist.some((item) => item._id === id);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         addToWishlist,
//         removeFromWishlist,
//         isWishlisted,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// import {
//   getWishlist,
//   addToWishlist as addToWishlistService,
//   removeFromWishlist as removeFromWishlistService,
// } from '@/services/wishlistService';

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ======================
//   // FETCH WISHLIST
//   // ======================
//   useEffect(() => {
//     console.log('Wishlist useEffect');
//     fetchWishlist();
//   }, []);

//   const fetchWishlist = async () => {
//     console.log('fetchWishlist started');

//     try {
//       setLoading(true);

//       const res = await getWishlist();

//       console.log('After getWishlist');
//       console.log(res);

//       if (!res.success) {
//         setWishlist([]);
//         return;
//       }

//       setWishlist(res.data?.data?.items ?? []);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // ======================
//   // ADD TO WISHLIST
//   // ======================

//   const addToWishlist = async (productId) => {
//     const res = await addToWishlistService(productId);

//     if (!res.success) {
//       toast.error(res.message);
//       return;
//     }

//     setWishlist(res.data.data.items ?? []);
//     toast.success('Added to wishlist');
//   };

//   // ======================
//   // REMOVE FROM WISHLIST
//   // ======================

//   const removeFromWishlist = async (productId) => {
//     const res = await removeFromWishlistService(productId);

//     if (!res.success) {
//       toast.error(res.message);
//       return;
//     }

//     setWishlist(res.data.data.items ?? []);
//     toast.success('Removed from wishlist');
//   };

//   // ======================
//   // CHECK IF PRODUCT EXISTS
//   // ======================

//   const isWishlisted = (productId) => {
//     return wishlist.some((item) => item.productId?._id === productId);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         loading,
//         fetchWishlist,
//         addToWishlist,
//         removeFromWishlist,
//         isWishlisted,
//         wishlistCount: wishlist.length,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import {
  getWishlist,
  addToWishlist as addToWishlistService,
  removeFromWishlist as removeFromWishlistService,
} from '@/services/wishlistService';

const WishlistContext = createContext(null);

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error('useWishlist must be used inside a WishlistProvider');
  }

  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // =========================
  // FETCH WISHLIST
  // =========================

  const fetchWishlist = async () => {
    try {
      const res = await getWishlist();

      console.log('GET WISHLIST:', res);

      if (!res.success) {
        setWishlist([]);
        return [];
      }

      const items = res.data?.data?.items ?? [];

      setWishlist(items);

      return items;
    } catch (error) {
      console.error('FETCH WISHLIST ERROR:', error);
      setWishlist([]);
      return [];
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {
    const loadWishlist = async () => {
      setLoading(true);

      await fetchWishlist();

      setLoading(false);
    };

    loadWishlist();
  }, []);

  // =========================
  // ADD TO WISHLIST
  // =========================

  const addToWishlist = async (productId) => {
    try {
      setUpdating(true);

      const res = await addToWishlistService(productId);

      if (!res.success) {
        toast.error(res.message || 'Failed to add to wishlist');
        return false;
      }

      const items = res.data?.data?.items ?? [];

      setWishlist(items);

      toast.success('Added to wishlist');

      return true;
    } catch (error) {
      console.error('ADD WISHLIST ERROR:', error);
      toast.error('Failed to add to wishlist');

      return false;
    } finally {
      setUpdating(false);
    }
  };

  // =========================
  // REMOVE FROM WISHLIST
  // =========================

  const removeFromWishlist = async (productId) => {
    try {
      setUpdating(true);

      const res = await removeFromWishlistService(productId);

      if (!res.success) {
        toast.error(res.message || 'Failed to remove from wishlist');
        return false;
      }

      const items = res.data?.data?.items ?? [];

      setWishlist(items);

      toast.success('Removed from wishlist');

      return true;
    } catch (error) {
      console.error('REMOVE WISHLIST ERROR:', error);
      toast.error('Failed to remove from wishlist');

      return false;
    } finally {
      setUpdating(false);
    }
  };

  // =========================
  // CHECK WISHLIST
  // =========================
  const isWishlisted = (productId) => {
    return wishlist.some((item) => {
      const wishlistProductId = item?.productId;

      if (!wishlistProductId) return false;

      if (typeof wishlistProductId === 'string') {
        return wishlistProductId === productId;
      }

      return wishlistProductId?._id?.toString() === productId?.toString();
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        updating,
        fetchWishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
