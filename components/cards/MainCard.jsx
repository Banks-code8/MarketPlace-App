'use client';

import Image from 'next/image';
import WishListButton from '../button/WishListButton';

const MainCard = ({
  product,
  image,
  title,
  subtitle,
  cost,
  className = '',
}) => {
  return (
    <div
      className={`h-full overflow-hidden rounded-[10px] bg-lightestBlue shadow-custom-primary transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      <div className="w-full bg-white">
        <Image
          src={image || '/placeholder-product.jpg'}
          alt={title || 'Product'}
          width={300}
          height={200}
          className="bg-no-repeat object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between">
          <h3 className="line-clamp-2 text-[18px] font-semibold leading-[24px]">
            {title}
          </h3>

          <WishListButton item={product} />
        </div>

        <p className="text-sm text-gray-500">{subtitle}</p>

        <p className="text-[16px] font-bold">
          ${Number(cost || 0).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default MainCard;
