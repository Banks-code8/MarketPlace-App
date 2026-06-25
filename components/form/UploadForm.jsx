'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { createProduct } from '@/services/productService';

const PRODUCT_CATEGORIES = [
  'Laptop',
  'Phone',
  'Monitor',
  'Keyboard',
  'Speakers',
  'Chargers',
  'Tripod',
  'Headset',
];

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Array.from(data.images || []).forEach((file) => {
        formData.append('images', file);
      });

      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('brand', data.brand);
      formData.append('price', data.price);
      formData.append('stock', data.stock);
      formData.append('tags', data.tags);

      const res = await createProduct(formData);

      if (!res.success) {
        toast.error(res.message || 'Product upload failed');
        return;
      }

      toast.success('Product uploaded successfully');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-custom-primary">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full rounded-md border border-mainGray/50 p-3"
          {...register('images', {
            required: 'At least one image is required',
          })}
        />

        <input
          type="text"
          placeholder="Product Name"
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('name', {
            required: 'Product name is required',
          })}
        />

        <textarea
          rows={4}
          placeholder="Product Description"
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('description', {
            required: 'Product description is required',
          })}
        />

        <select
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('category', {
            required: 'Category is required',
          })}
        >
          <option value="">Select Category</option>

          {PRODUCT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Brand"
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('brand', {
            required: 'Brand is required',
          })}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('price', {
            required: 'Price is required',
          })}
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('stock', {
            required: 'Stock quantity is required',
          })}
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full rounded-md border border-mainGray/50 p-3 focus:border-primary focus:outline-none"
          {...register('tags', {
            required: 'Tags are required',
          })}
        />

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="rounded-md bg-primary py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Uploading...' : 'Upload Product'}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
