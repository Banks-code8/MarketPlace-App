'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { RiDeleteBinLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';

const CartItems = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (!cart.length) {
    return <p className="py-10 text-center text-gray-500">Cart is empty</p>;
  }

  return (
    <div className="">
      {cart.map((product) => (
        <div
          key={product._id}
          className="grid w-full grid-cols-1 items-center justify-between gap-4 rounded-[10px] bg-white p-4 shadow-custom-primary md:grid-cols-2"
        >
          {/* Product */}
          <div className="flex gap-4">
            <Image
              src={product.images?.[0]?.url || '/placeholder-product.jpg'}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">{product.name}</h3>

              <p className="font-bold">
                ${Number(product.price).toLocaleString()}
              </p>
              <p className="font-bold">{product.brand} </p>
            </div>
          </div>

          <div className="flex w-full justify-between gap-4">
            {/* Quantity Button*/}{' '}
            <div className="flex h-fit w-full items-center justify-center gap-3 rounded-[5px] border border-mainGray px-[10px] py-[4px]">
              <button
                onClick={() =>
                  updateQuantity(product._id, Math.max(1, product.quantity - 1))
                }
                className="rounded border p-1"
              >
                <RiSubtractLine />
              </button>

              <span className="w-full bg-primary text-center text-white">
                {product.quantity}
              </span>

              <button
                onClick={() =>
                  updateQuantity(product._id, product.quantity + 1)
                }
                className="rounded border p-1"
              >
                <RiAddLine />
              </button>
            </div>
            {/* Remove */}
            <button
              onClick={() => removeFromCart(product._id)}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <RiDeleteBinLine size={20} />
            </button>{' '}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
