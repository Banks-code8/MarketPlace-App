'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist')) || [];

    setWishlist(saved);
  }, []);

  const addToWishlist = (product) => {
    const exists = wishlist.some((item) => item._id === product._id);

    if (exists) return;

    const updated = [...wishlist, product];

    setWishlist(updated);

    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item._id !== id);

    setWishlist(updated);

    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const isWishlisted = (id) => {
    return wishlist.some((item) => item._id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
