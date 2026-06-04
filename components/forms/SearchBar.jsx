'use client';

import { useState } from 'react';
import Link from 'next/link';
import products from '@/components/data/products';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <div className="absolute mt-1 w-full rounded border bg-white shadow">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`} // use slug for dynamic routing
                className="block p-2 hover:bg-gray-100"
              >
                {product.title}
              </Link>
            ))
          ) : (
            <p className="p-2 text-gray-500">No results</p>
          )}
        </div>
      )}
    </div>
  );
}
