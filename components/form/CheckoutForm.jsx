'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { createOrder } from '@/services/orderService';
import { initializePayment, verifyPayment } from '@/services/paymentService';

import TitleText from '../typography/TitleText';
import MainText from '../typography/MainText';

const inputClass =
  'w-full rounded-[10px] border border-mainGray/30 px-4 py-3 outline-none transition focus:border-primary';

const CheckoutForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      delivery: 'standard',
      paymentMethod: 'paystack',
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      shippingAddress: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
      },
      paymentMethod: data.paymentMethod,
    };

    try {
      // Create Order
      const orderResponse = await createOrder(payload);

      if (!orderResponse.success) {
        return toast.error(orderResponse.message);
      }

      const order = orderResponse.data.data;

      console.log('Order:', order);
      console.log('Order ID:', order?._id);

      // Initialize Payment
      const paymentResponse = await initializePayment(order._id);

     if (!paymentResponse.success) {
        return toast.error(paymentResponse.message);
      }

      const { authorization_url } = paymentResponse.data.data;

      if (!authorization_url) {
        return toast.error('Payment URL was not generated.');
      }

      window.location.href = authorization_url;
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-custom-primary">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* CUSTOMER INFORMATION */}
        <section className="space-y-5">
          <TitleText text="Customer Information" />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className={inputClass}
              placeholder="First Name"
              {...register('firstName', {
                required: 'First name is required',
              })}
            />

            <input
              className={inputClass}
              placeholder="Last Name"
              {...register('lastName', {
                required: 'Last name is required',
              })}
            />

            <input
              className={inputClass}
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: 'Email is required',
              })}
            />

            <input
              className={inputClass}
              placeholder="Phone Number"
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
            />
          </div>
        </section>

        {/* SHIPPING ADDRESS */}
        <section className="space-y-5">
          <TitleText text="Shipping Address" />

          <input
            className={inputClass}
            placeholder="Street Address"
            {...register('address', { required: true })}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className={inputClass}
              placeholder="City"
              {...register('city', { required: true })}
            />

            <input
              className={inputClass}
              placeholder="State"
              {...register('state', { required: true })}
            />

            <input
              className={inputClass}
              placeholder="Postal Code"
              {...register('postalCode', { required: true })}
            />

            <input
              className={inputClass}
              placeholder="Country"
              {...register('country', { required: true })}
            />
          </div>
        </section>

        {/* DELIVERY */}
        <section className="space-y-4">
          <TitleText text="Delivery Method" />

          <label className="flex items-start gap-3 rounded-lg border p-4">
            <input type="radio" value="standard" {...register('delivery')} />

            <div>
              <MainText text="Standard Delivery" textSize="font-semibold" />
              <MainText text="5 - 7 business days" color="text-mainGray" />
            </div>
          </label>

          <label className="flex items-start gap-3 rounded-lg border p-4">
            <input type="radio" value="express" {...register('delivery')} />

            <div>
              <MainText text="Express Delivery" textSize="font-semibold" />
              <MainText text="2 - 3 business days" color="text-mainGray" />
            </div>
          </label>
        </section>

        {/* PAYMENT */}
        <section className="space-y-5">
          <TitleText text="Payment Method" />

          <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <input
              type="hidden"
              value="paystack"
              {...register('paymentMethod')}
            />

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              💳
            </div>

            <div className="space-y-1">
              <MainText text="Debit / Credit Card" textSize="font-semibold" />

              <MainText
                text="Secure payment powered by Paystack. Supports Visa, Mastercard and Verve."
                color="text-mainGray"
              />
            </div>
          </div>
        </section>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full rounded-lg bg-primary py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Processing Payment...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
