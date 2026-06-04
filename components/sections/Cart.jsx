'use client';

import { useCart } from '@/context/CartContext';
import HeaderOne from '../typography/HeaderOne';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import PageBorders from '../wrappers/PageBorders';

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, clearCart, total } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center py-20">
        <HeaderOne text="Your cart is empty" />
      </div>
    );
  }

  return (
    <div>
      <HeaderOne text={'Product Cart'} />

      <PageBorders>
        <div className="flex flex-col gap-10">
          {cart.map((item) => {
            const price = Number(item?.cost?.replace?.('$', '') || 0);
            const subtotal = price * item.quantity;

            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 border-b pb-6 md:flex-row md:gap-8"
              >
                {/* Product Image */}
                <div className="overflow-hidden rounded-[10px] shadow-custom-primary">
                  <ImageWrapper
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col gap-3">
                  <HeaderOne text={item.title} />

                  <MainText text={item.subtitle} color="text-mainGray" />

                  <MainText text={`Price: ${item.cost}`} />

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="rounded border px-3 py-1"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="rounded border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Subtotal */}
                  <MainText text={`Subtotal: $${subtotal}`} />

                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-fit text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          {/* Order Summary */}
          <div className="flex flex-col gap-4 border-t pt-6">
            <HeaderOne text={`Total: $${total}`} />

            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="rounded bg-red-500 px-5 py-2 text-white"
              >
                Clear Cart
              </button>

              <button className="rounded bg-primary px-5 py-2 text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </PageBorders>
    </div>
  );
}
