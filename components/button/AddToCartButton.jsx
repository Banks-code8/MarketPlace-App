'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

const AddToCartButton = ({ text, product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-fit cursor-pointer rounded-[10px] bg-primary px-[20px] py-[10px] text-[14px] font-semibold shadow-custom-primary transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {text}
    </button>
  );
};

export default AddToCartButton;
