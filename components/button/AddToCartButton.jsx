'use client';

import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { useCart } from '@/context/CartContext';

const AddToCartButton = ({ product }) => {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const cartItem = cart.find((item) => item._id === product._id);

  if (!cartItem) {
    return (
      <button
        onClick={() => addToCart(product)}
        className="w-full rounded-md bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex w-full items-center justify-between rounded-md border border-mainGray">
      <button onClick={() => decreaseQty(product._id)} className="p-3">
        <RiSubtractLine />
      </button>

      <span className="flex-1 bg-primary py-2 text-center text-white">
        {cartItem.quantity}
      </span>

      <button onClick={() => increaseQty(product._id)} className="p-3">
        <RiAddLine />
      </button>
    </div>
  );
};

export default AddToCartButton;
