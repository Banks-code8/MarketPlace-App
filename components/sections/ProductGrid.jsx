'use client';

import Link from 'next/link';
import MainCard from '@/components/cards/MainCard';

const ProductGrid = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
      {products.map((product) => (
        <Link key={product._id} href={`/product/${product.slug}`}>
          <MainCard
            image={product.images?.[0]?.url}
            title={product.name}
            product={product}
            subtitle={product.category}
            cost={
              product.discountPrice > 0 ? product.discountPrice : product.price
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
