'use client';

import { useState } from 'react';

import { useProducts } from '@/hooks/useProduct';

import FilterItems from '@/components/sections/FilterItems';
import MainCard from '@/components/cards/MainCard';

const FilterWrapper = () => {
  const [filters, setFilters] = useState({});

  const { products, loading } = useProducts(filters);

  return (
    <div className="flex flex-col gap-6">
      <FilterItems onFilter={setFilters} />

      {loading ? (
        <div className="py-10 text-center">Loading products...</div>
      ) : (
        <MainCard products={products} />
      )}
    </div>
  );
};

export default FilterWrapper;
