'use client';

import Image from 'next/image';
import AddToCartButton from '../button/AddToCartButton';
import MainText from '../typography/MainText';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCart } from '@/context/CartContext';

const CartItems = () => {
  const { cart, removeItem, cartCount, total } = useCart();

  if (!cart.length) {
    return (
      <p className="py-16 text-center text-gray-500">Your cart is empty.</p>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      {/* Cart Items */}
      <div className="space-y-5">
        {cart.map((product) => (
          <div
            key={product._id}
            className="flex flex-col justify-between gap-5 rounded-xl bg-white p-5 shadow-custom-primary md:flex-row md:items-center"
          >
            <div className="flex gap-4">
              <Image
                src={product.images?.[0]?.url || '/placeholder-product.jpg'}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />

              <div className="space-y-2">
                <h3 className="font-semibold">{product.name}</h3>

                <p>{product.brand}</p>

                <p className="font-bold">
                  ${Number(product.price).toLocaleString()}
                </p>
              </div>
            </div>

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
        ))}
      </div>

      {/* Checkout Summary */}
      <div className="h-fit rounded-xl bg-white p-6 shadow-custom-primary">
        <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

        <div className="space-y-3">
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

          <button className="mt-6 w-full rounded-md bg-primary py-3 font-medium text-white transition hover:opacity-90">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
