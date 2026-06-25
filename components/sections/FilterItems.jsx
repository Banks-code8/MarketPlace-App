'use client';

import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const FilterItems = ({ onFilter }) => {
  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
  });

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-[10px] border px-4 py-2"
      >
        <FiFilter />
        Filter
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 flex w-[280px] flex-col gap-3 rounded-[10px] bg-white p-4 shadow-lg">
          <input
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="rounded border p-2"
          />

          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="Min Price"
            className="rounded border p-2"
          />

          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="Max Price"
            className="rounded border p-2"
          />

          <select
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className="rounded border p-2"
          >
            <option value="">Sort</option>
            <option value="-createdAt">Newest</option>
            <option value="price">Price Low</option>
            <option value="-price">Price High</option>
          </select>

          <button
            onClick={() => {
              onFilter(filters);
              setOpen(false);
            }}
            className="rounded bg-black py-2 text-white"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterItems;
