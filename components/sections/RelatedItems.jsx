'use client';

import HeaderOne from '@/components/typography/HeaderOne';
import ProductGrid from '@/components/sections/ProductGrid';

const RelatedItems = ({ products = [] }) => {
  if (!products.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4">
      <HeaderOne text="Recommended" />
      <ProductGrid products={products} />
    </section>
  );
};

export default RelatedItems;
