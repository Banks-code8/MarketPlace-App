import { getProductBySlug } from '@/services/productService';

import RelatedItems from '@/components/sections/RelatedItems';
import PageBorders from '@/components/wrappers/PageBorders';

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="space-y-10">
      {/* Product Details */}
      <PageBorders>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p>{product.description}</p>
      </PageBorders>
      {/* Related Products */}
      <PageBorders>
        <RelatedItems
          products={product.relatedProducts || []}
          category={product.category}
        />{' '}
      </PageBorders>
    </div>
  );
}
