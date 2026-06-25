'use client';

import { useWishlist } from '@/context/WishListContext';
import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';

const WishlistItems = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (!wishlist.length) {
    return (
      <div className="py-10 text-center text-gray-500">
        No wishlist items yet
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-[10px] shadow-custom-primary">
      {wishlist.map((product) => (
        <div
          key={product._id}
          className="flex items-center justify-between rounded-[10px] bg-white p-4 shadow-custom-primary"
        >
          {/* Product */}
          <div className="flex items-center gap-4">
            <Image
              src={product.images?.[0]?.url || '/placeholder-product.jpg'}
              alt={product.name}
              width={90}
              height={90}
              className="rounded-md object-cover"
            />

            <div className="flex flex-col gap-1">
              <h3 className="line-clamp-1 font-semibold">{product.name}</h3>

              <p className="text-sm text-gray-500">{product.category}</p>

              <p className="font-bold">
                $
                {Number(
                  product.discountPrice > 0
                    ? product.discountPrice
                    : product.price
                ).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromWishlist(product._id)}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <RiDeleteBinLine size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default WishlistItems;
