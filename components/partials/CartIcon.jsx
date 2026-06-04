'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="relative">
      <div className="text-xl">🛒</div>

      {cartCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
