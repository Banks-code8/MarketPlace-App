'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useCart } from '@/context/CartContext';
import AddToCartButton from '../button/AddToCartButton';
import MainText from '../typography/MainText';

const CartItems = () => {
  const { cart, removeItem, cartCount, total } = useCart();
  const router = useRouter();

  if (!cart.length) {
    return (
      <p className="py-16 text-center text-gray-500">Your cart is empty.</p>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      {/* Cart Items */}
      <div className="space-y-5">
        {cart.map((item) => {
          const product = item.productId;

          if (!product) return null;

          return (
            <div
              key={item._id}
              className="grid grid-cols-1 gap-5 rounded-xl bg-white p-5 shadow-custom-primary md:grid-cols-2 md:items-center"
            >
              {/* Product */}
              <div className="flex gap-4">
                <Image
                  src={product.images?.[0]?.url || '/placeholder-product.jpg'}
                  alt={product.name || 'Marketplace product image'}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />

                <div className="space-y-2">
                  <h3 className="font-semibold">{product.name}</h3>

                  <p className="text-sm text-gray-500">
                    {product.brand || 'No brand'}
                  </p>

                  <p className="font-bold text-primary">
                    $
                    {Number(
                      product.discountPrice ?? product.price
                    ).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <AddToCartButton product={product} />

                <button
                  onClick={() => removeItem(product._id)}
                  className="rounded-full p-3 transition hover:bg-gray-100"
                >
                  <RiDeleteBinLine size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Summary */}
      <div className="h-fit rounded-xl bg-white p-6 shadow-custom-primary">
        <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <MainText text="Items" />
            <MainText text={cartCount} />
          </div>

          <div className="flex justify-between">
            <MainText text="Subtotal" />
            <MainText text={`$${total.toLocaleString()}`} />
          </div>

          <hr />

          <div className="flex justify-between font-semibold">
            <MainText text="Total" />
            <MainText text={`$${total.toLocaleString()}`} />
          </div>

          <button
            onClick={() => router.push('/order')}
            className="mt-6 w-full rounded-md bg-primary py-3 font-medium text-white transition hover:opacity-90"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
