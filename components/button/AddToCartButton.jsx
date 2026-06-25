'use client';

import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

const AddToCartButton = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();

  const item = cart.find((cartItem) => cartItem._id === product._id);

  const quantity = item?.quantity || 0;

  const handleAdd = () => {
    addToCart({
      ...product,
      quantity: 1,
    });

    toast.success('Added to cart');
  };

  const increase = () => {
    updateQuantity(product._id, quantity + 1);

    toast.success('Quantity increased');
  };

  const decrease = () => {
    if (quantity <= 1) {
      updateQuantity(product._id, 0);

      toast.success('Removed from cart');
      return;
    }

    updateQuantity(product._id, quantity - 1);

    toast.success('Quantity decreased');
  };

  return (
    <div>
      {quantity === 0 ? (
        <button
          onClick={handleAdd}
          className="w-full rounded-md bg-primary px-5 py-3 text-white"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex h-fit w-full items-center justify-center gap-3 rounded-[5px] border border-mainGray px-[10px] py-[2px]">
          <button onClick={decrease} className="p-3">
            <RiSubtractLine />
          </button>

          <span className="w-full bg-primary text-center text-white">
            {quantity}
          </span>

          <button onClick={increase} className="p-3">
            <RiAddLine />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
