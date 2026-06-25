'use client';

import { useWishlist } from '@/context/WishListContext';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

const WishListButton = ({ item }) => {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const saved = isWishlisted(item._id);

  const handleClick = () => {
    if (saved) {
      removeFromWishlist(item._id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-full p-2 transition hover:bg-gray-100"
    >
      {saved ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
    </button>
  );
};

export default WishListButton;
