// // 'use client';

// // import { useWishlist } from '@/context/WishListContext';
// // import Image from 'next/image';
// // import { RiDeleteBinLine } from 'react-icons/ri';

// // const WishlistItems = () => {
// //   const { wishlist, removeFromWishlist } = useWishlist();

// //   if (!wishlist.length) {
// //     return (
// //       <div className="py-10 text-center text-gray-500">
// //         No wishlist items yet
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col gap-4 rounded-[10px] shadow-custom-primary">
// //       {wishlist.map((product) => (
// //         <div
// //           key={product._id}
// //           className="flex items-center justify-between rounded-[10px] bg-white p-4 shadow-custom-primary"
// //         >
// //           {/* Product */}
// //           <div className="flex items-center gap-4">
// //             <Image
// //               src={product.images?.[0]?.url || '/placeholder-product.jpg'}
// //               alt={product.name}
// //               width={90}
// //               height={90}
// //               className="rounded-md object-cover"
// //             />

// //             <div className="flex flex-col gap-1">
// //               <h3 className="line-clamp-1 font-semibold">{product.name}</h3>

// //               <p className="text-sm text-gray-500">{product.category}</p>

// //               <p className="font-bold">
// //                 $
// //                 {Number(
// //                   product.discountPrice > 0
// //                     ? product.discountPrice
// //                     : product.price
// //                 ).toLocaleString()}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Remove */}
// //           <button
// //             onClick={() => removeFromWishlist(product._id)}
// //             className="rounded-full p-2 hover:bg-gray-100"
// //           >
// //             <RiDeleteBinLine size={20} />
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default WishlistItems;
// 'use client';

// import Image from 'next/image';
// import { RiDeleteBinLine } from 'react-icons/ri';

// import { useWishlist } from '@/context/WishListContext';

// const WishlistItems = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   if (!wishlist?.length) {
//     return (
//       <div className="py-10 text-center text-gray-500">
//         No wishlist items yet.
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-4">
//       {wishlist.map((item) => {
//         const product = item.productId;

//         if (!product) return null;

//         const image = product.images?.[0]?.url || '/placeholder-product.jpg';

//         const price = Number(product.discountPrice ?? product.price ?? 0);

//         return (
//           <div
//             key={item._id}
//             className="flex items-center justify-between rounded-xl bg-white p-4 shadow-custom-primary"
//           >
//             <div className="flex items-center gap-4">
//               <div className="grid h-full w-full place-items-center">
//                 {' '}
//                 <Image
//                   src={image}
//                   alt={product.name || 'Product image'}
//                   width={300}
//                   height={300}
//                   className="bg-no-repeat object-cover object-center"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <h3 className="line-clamp-1 font-semibold">{product.name}</h3>
//                 <p className="text-sm capitalize text-gray-500">
//                   {product.category || 'Uncategorized'}
//                 </p>
//                 <p className="font-bold text-primary">
//                   $
//                   {Number(
//                     product.discountPrice ?? product.price
//                   ).toLocaleString()}
//                 </p>{' '}
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => removeFromWishlist(product._id)}
//               className="rounded-full p-2 transition hover:bg-gray-100"
//               aria-label={`Remove ${product.name} from wishlist`}
//             >
//               <RiDeleteBinLine size={20} />
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default WishlistItems;
'use client';

import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useWishlist } from '@/context/WishListContext';

const WishlistItems = () => {
  const { wishlist, removeFromWishlist, loading } = useWishlist();
  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">Loading wishlist...</div>
    );
  }

  if (!wishlist?.length) {
    return (
      <div className="py-10 text-center text-gray-500">
        No wishlist items yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {wishlist.map((item) => {
        const product = item?.productId;

        if (!product || typeof product !== 'object') {
          return null;
        }

        const image = product.images?.[0]?.url || '/placeholder-product.jpg';

        const price = Number(
          product.effectivePrice ?? product.discountPrice ?? product.price ?? 0
        );
        return (
          <div
            key={item._id}
            className="flex items-center rounded-xl bg-white p-4 shadow-custom-primary"
          >
            <div className="grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-3">
              <div className="grid place-items-center">
                <Image
                  src={image}
                  alt={product.name || 'Product image'}
                  width={200}
                  height={100}
                  className="bg-no-repeat object-contain object-center"
                />
              </div>
              <div className="space-y-1">
                <h3 className="line-clamp-1 font-semibold">{product.name}</h3>
              </div>{' '}
              <div className="flex w-full justify-between">
                {' '}
                <div>
                  <p className="text-sm capitalize text-gray-500">
                    {product.category || 'Uncategorized'}
                  </p>

                  <p className="font-bold text-primary">
                    ${price.toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromWishlist(product._id)}
                  className="rounded-full p-2 transition hover:bg-gray-100"
                  aria-label={`Remove ${product.name} from wishlist`}
                >
                  <RiDeleteBinLine size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishlistItems;
