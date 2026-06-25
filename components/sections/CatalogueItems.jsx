'use client';

import { useState } from 'react';

import { useProducts } from '@/hooks/useProduct';

import ProductGrid from '@/components/sections/ProductGrid';

import CategoryItems from './CategoryItems';
import FilterItems from './FilterItems';
import RelatedItems from './RelatedItems';

const CatalogueItems = () => {
  const { products = [], loading } = useProducts();

  const [category, setCategory] = useState('laptop');
  const [filters, setFilters] = useState({});

  const filteredProducts = products.filter((product) => {
    if (
      category &&
      product.category?.trim().toLowerCase() !== category.trim().toLowerCase()
    ) {
      return false;
    }

    if (
      filters.brand &&
      !product.brand
        ?.trim()
        .toLowerCase()
        .includes(filters.brand.trim().toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  if (loading) {
    return <div className="py-10 text-center">Loading products...</div>;
  }
  console.log(products);
  console.log(filteredProducts);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start gap-4 md:justify-between">
        <CategoryItems selected={category} onCategory={setCategory} />

        <FilterItems onFilter={setFilters} />
      </div>

      <ProductGrid products={filteredProducts} />

      <RelatedItems products={products} category={category} />
    </div>
  );
};

export default CatalogueItems;
