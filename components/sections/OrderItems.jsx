'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const OrderItems = () => {
  const { cart } = useCart();

  if (!cart?.length) {
    return (
      <p className="py-16 text-center text-gray-500">
        No products in your order.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {cart.map((item) => {
        const product = item.productId;

        if (!product) return null;

        const image = product.images?.[0]?.url || '/placeholder-product.jpg';

        const price = Number(
          product.effectivePrice ?? product.price ?? item.priceAtAdd ?? 0
        );

        return (
          <div
            key={item._id}
            className="flex items-center justify-between rounded-xl bg-white p-5 shadow-custom-primary"
          >
            <div className="flex items-center gap-4">
              <Image
                src={image}
                alt={
                  product.name
                    ? `${product.name} marketplace image`
                    : 'Marketplace product image'
                }
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />

              <div className="space-y-2">
                <h3 className="font-semibold">{product.name}</h3>

                <p className="text-sm text-gray-500">
                  {product.brand || 'No brand'}
                </p>

                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>

                <p className="font-bold text-primary">
                  ${price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderItems;
