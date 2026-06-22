'use client';

import Link from 'next/link';

import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import RatingItems from '@/components/sections/RatingItems';

const MainCard = ({ products = [] }) => {
  if (!products.length) {
    return <div className="py-10 text-center">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/product/${product.slug}`}
          className="overflow-hidden rounded-[10px] shadow-custom-primary transition hover:scale-[1.02]"
        >
          <ImageWrapper
            src={product.images?.[0]?.url || '/placeholder.png'}
            alt={product.name || 'Product image'}
            width={300}
            height={300}
            styles="h-[250px] w-full object-cover"
          />

          <div className="flex flex-col gap-2 p-4">
            <MainText text={product.name} />

            {product.brand && (
              <MainText text={product.brand} color="text-mainGray" />
            )}

            <span className="font-semibold">
              ₦ {product.price?.toLocaleString()}
            </span>

            <RatingItems rating={product.rating} reviews={product.numReviews} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainCard;
