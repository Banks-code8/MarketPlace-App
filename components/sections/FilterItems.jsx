'use client';

import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const FilterItems = ({ onFilter }) => {
  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilter = () => {
    onFilter(filters);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-[10px] border px-4 py-2"
      >
        <FiFilter size={20} />
        Filter
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-3 flex w-[280px] flex-col gap-4 rounded-[10px] bg-white p-5 shadow-custom-primary">
          {/* Category */}
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="rounded border p-2"
          >
            <option value="">All Categories</option>

            <option value="phones">Phones</option>

            <option value="fashion">Fashion</option>

            <option value="computers">Computers</option>
          </select>

          {/* Brand */}
          <input
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="rounded border p-2"
          />

          {/* Min Price */}
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="Min price"
            className="rounded border p-2"
          />

          {/* Max Price */}
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="Max price"
            className="rounded border p-2"
          />

          {/* Sort */}
          <select
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className="rounded border p-2"
          >
            <option value="">Sort</option>

            <option value="-createdAt">Newest</option>

            <option value="price">Price low</option>

            <option value="-price">Price high</option>
          </select>

          <button
            onClick={applyFilter}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterItems;
