'use client';

import { PRODUCT_CATEGORIES } from '@/constants/categorySlug';

const CategoryItems = ({ selected, onCategory }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {PRODUCT_CATEGORIES.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategory(category.slug)}
          className={`rounded-[10px] px-4 py-2 ${
            selected === category.slug ? 'bg-primary text-white' : 'border'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryItems;
