// 'use client';

// import { useWishlist } from '@/context/WishListContext';
// import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

// const WishListButton = ({ item }) => {
//   const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

//   const saved = isWishlisted(item._id);

//   const handleClick = () => {
//     if (saved) {
//       removeFromWishlist(item._id);
//     } else {
//       addToWishlist(item);
//     }
//   };

//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       className="rounded-full p-2 transition hover:bg-gray-100"
//     >
//       {saved ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
//     </button>
//   );
// };

// export default WishListButton;
// 'use client';

// import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
// import { useWishlist } from '@/context/WishListContext';

// const WishListButton = ({ item }) => {
//   const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

//   const saved = isWishlisted(item._id);

//   const handleClick = async () => {
//     if (saved) {
//       await removeFromWishlist(item._id);
//     } else {
//       await addToWishlist(item._id);
//     }
//   };

//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       className="rounded-full p-2 transition hover:bg-gray-100"
//       aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
//     >
//       {saved ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
//     </button>
//   );
// };

// export default WishListButton;
'use client';

import { RiHeartFill, RiHeartLine } from 'react-icons/ri';

import { useWishlist } from '@/context/WishListContext';

const WishListButton = ({ item }) => {
  const { addToWishlist, removeFromWishlist, isWishlisted, updating } =
    useWishlist();

  const saved = isWishlisted(item?._id);

  const handleClick = async () => {
    if (!item?._id || updating) return;

    if (saved) {
      await removeFromWishlist(item._id);
    } else {
      await addToWishlist(item._id);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={updating}
      className={`rounded-full p-2 transition hover:bg-gray-100 ${
        saved ? 'text-red-500' : 'text-gray-700'
      } ${updating ? 'cursor-not-allowed opacity-50' : ''}`}
      aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      {saved ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
    </button>
  );
};

export default WishListButton;
