import Image from 'next/image';

import { getProductBySlug } from '@/services/productService';

import AddToCartButton from '@/components/button/AddToCartButton';
import WishListButton from '@/components/button/WishListButton';
import RelatedItems from '@/components/sections/RelatedItems';
import PageBorders from '@/components/wrappers/PageBorders';

export const metadata = {
  title: 'Marketplace',
  description: 'Welcome to Marketplace',
};

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const res = await getProductBySlug(slug);

  if (!res.success || !res.data?.data) {
    return <div>Product not found</div>;
  }

  const { product, relatedProducts } = res.data.data;

  return (
    <div className="space-y-10">
      <PageBorders>
        <div className="p-[20px] shadow-custom-primary">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid justify-items-center">
              <Image
                src={product.images?.[0]?.url}
                alt={`${product.name} - Marketplace`}
                width={300}
                height={300}
                loading="eager"
                className="bg-cover bg-center bg-no-repeat"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>

              <p className="text-left text-[14px] font-normal leading-[24px] tracking-normal text-black md:text-[16px]">
                {product.description}
              </p>

              <div className="space-y-2">
                <div className="flex w-full items-center justify-between">
                  <p className="text-left text-[18px] font-semibold leading-[24px] tracking-normal text-black md:text-[24px] md:leading-[32px]">
                    {product.brand}
                  </p>

                  <WishListButton item={product} />
                </div>

                <p className="text-left text-[14px] font-semibold leading-[24px] tracking-normal text-black md:text-[16px]">
                  $
                  {product.discountPrice > 0
                    ? product.discountPrice
                    : product.price}
                </p>

                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[8px] w-full p-[20px] shadow-custom-primary">
          <RelatedItems products={relatedProducts} />
        </div>
      </PageBorders>
    </div>
  );
}
