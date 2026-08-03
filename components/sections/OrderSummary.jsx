'use client';

import { useCart } from '@/context/CartContext';
import MainText from '../typography/MainText';

const OrderSummary = () => {
  const { cartCount, total } = useCart();

  const shipping = total >= 500 ? 0 : 20;

  const grandTotal = total + shipping;

  return (
    <div className="rounded-xl bg-white p-6 shadow-custom-primary">
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

        <div className="flex justify-between">
          <MainText text="Shipping" />
          <MainText text={shipping === 0 ? 'Free' : `$${shipping}`} />
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <MainText text="Total" />
          <MainText text={`$${grandTotal.toLocaleString()}`} />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
