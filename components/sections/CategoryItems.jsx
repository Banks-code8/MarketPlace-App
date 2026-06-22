'use client';

import { useProducts } from '@/hooks/useProduct';

import MainCard from '@/components/cards/MainCard';

const CategoryItems = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <p>Loading categories...</p>;
  }

  const categories = products.reduce((group, product) => {
    const category = product.category || 'uncategorized';

    if (!group[category]) {
      group[category] = [];
    }

    group[category].push(product);

    return group;
  }, {});

  return (
    <div className="flex flex-col gap-10">
      {Object.keys(categories).map((category) => (
        <section key={category}>
          <h2 className="mb-5 text-2xl font-bold capitalize">{category}</h2>

          <MainCard products={categories[category]} />
        </section>
      ))}
    </div>
  );
};

export default CategoryItems;
