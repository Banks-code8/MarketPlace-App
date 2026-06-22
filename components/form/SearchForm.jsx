'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    router.push(`/products?search=${data.search}`);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex gap-3">
      <input
        {...register('search')}
        placeholder="Search products..."
        className="rounded border px-3 py-2"
      />

      <button className="rounded bg-black px-4 py-2 text-white">Search</button>
    </form>
  );
};

export default SearchForm;
