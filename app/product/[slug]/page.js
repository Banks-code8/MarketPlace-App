import { getProductBySlug } from '@/services/productService';

import RelatedItems from '@/components/sections/RelatedItems';
import PageBorders from '@/components/wrappers/PageBorders';
import Image from 'next/image';
import MainText from '@/components/typography/MainText';
import WishListButton from '@/components/button/WishListButton';

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

  const product = res.data.data;

  return (
    <div className="space-y-10">
      <PageBorders>
        {' '}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
          {/* grid 1 */}
          <div className="col-span-3 p-[20px] shadow-custom-primary">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {' '}
              <Image
                src={product.images?.[0]?.url}
                alt={`${product.name} -Marketplace`}
                height={300}
                width={300}
                className={'bg-cover bg-center bg-no-repeat'}
              />{' '}
              <div className="flex flex-col gap-4">
                {' '}
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-left text-[14px] font-normal leading-[24px] tracking-normal text-black md:text-[16px]">
                  {product.description}
                </p>
                <div className="space-y-2">
                  <div className="flex w-full items-center justify-between">
                    {' '}
                    <p className="text-left text-[18px] font-semibold leading-[24px] tracking-normal text-black md:text-[24px] md:leading-[32px]">
                      {product.brand}
                    </p>
                    <WishListButton item={product} />{' '}
                  </div>
                  <p className="text-left text-[14px] font-semibold leading-[24px] tracking-normal text-black md:text-[16px]">
                    ${' '}
                    {product.discountPrice > 0
                      ? product.discountPrice
                      : product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 2 */}
          <div className="col-span-1 p-[20px] shadow-custom-primary">
            <MainText text={'Delivery details'} />
          </div>
        </div>{' '}
        <div className="mt-[8px] w-full p-[20px] shadow-custom-primary">
          <RelatedItems
            products={product.relatedProducts || []}
            category={product.category}
          />
        </div>
      </PageBorders>
    </div>
  );
}
