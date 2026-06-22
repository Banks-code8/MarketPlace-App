'use client';

import { useEffect, useState } from 'react';

import { getRelatedProducts } from '@/services/productService';

import MainCard from '@/components/cards/MainCard';

const RelatedItems = ({ slug }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      const res = await getRelatedProducts(slug);

      if (res.success) {
        setProducts(res.data?.data || []);
      }

      setLoading(false);
    };

    fetchRelated();
  }, [slug]);

  return (
    <div>{loading ? <p>Loading...</p> : <MainCard products={products} />}</div>
  );
};

export default RelatedItems;
