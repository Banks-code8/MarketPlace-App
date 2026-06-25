'use client';

import HeaderOne from '@/components/typography/HeaderOne';
import ProductGrid from '@/components/sections/ProductGrid';

const RelatedItems = ({ products = [], category }) => {
  const relatedProducts = products
    .filter((product) => product.category === category)
    .slice(0, 4);

  if (!category || relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4">
      <HeaderOne text="Recommended" />

      <ProductGrid products={relatedProducts} />
    </section>
  );
};

export default RelatedItems;
