'use client';

import { RiShoppingCartLine } from 'react-icons/ri';
import { useCart } from '@/context/CartContext';

const CartIcon = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <RiShoppingCartLine size={40} />

      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
