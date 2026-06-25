'use client';

import { RiHeartLine } from 'react-icons/ri';
import { useWishlist } from '@/context/WishListContext';

const WishlistIcon = () => {
  const { wishlist } = useWishlist();

  const totalItems = wishlist?.length || 0;

  return (
    <div className="relative">
      <RiHeartLine size={40} />

      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;
