'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiSearch2Line } from 'react-icons/ri';

import { useProducts } from '@/hooks/useProduct';

const SearchForm = () => {
  const router = useRouter();
  const { products = [] } = useProducts();

  const [open, setOpen] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const searchValue = watch('search', '');

  const matchedProducts = products
    .filter((product) =>
      product.name?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(0, 5);

  const submit = (data) => {
    const value = data.search?.trim();

    if (!value) return;

    router.push(`/products?search=${encodeURIComponent(value)}`);

    setOpen(false);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(submit)}
        className="rounded-[5px] border border-mainGray bg-white pr-[4px]"
      >
        <div className="flex items-center gap-3">
          <input
            {...register('search')}
            onFocus={() => setOpen(true)}
            placeholder="Search products..."
            className="w-full rounded border-none bg-transparent px-3 py-2 placeholder:text-mainGray focus:outline-none"
          />

          <button type="submit">
            <RiSearch2Line size={24} />
          </button>
        </div>
      </form>

      {open && searchValue && (
        <div className="absolute left-0 top-full z-20 mt-2 w-full rounded-[10px] bg-white shadow-custom-primary">
          {matchedProducts.length > 0 ? (
            matchedProducts.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product.slug}`}
                className="block border-b p-3 hover:bg-mainGray/10"
                onClick={() => setOpen(false)}
              >
                {product.name}
              </Link>
            ))
          ) : (
            <p className="p-3 text-sm text-mainGray">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
