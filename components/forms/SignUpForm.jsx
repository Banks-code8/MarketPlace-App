'use client';
import React, { useState } from 'react';
import HeaderOne from '../typography/HeaderOne';
import MainText from '../typography/MainText';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signUpUser } from '@/services/userService';

const SignUpForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call userService signupUser
    const res = await signUpUser(form);

    if (!res.success) {
      toast.error(res.message || 'Signup failed ❌');
      return;
    }

    toast.success('Account created successfully 🎉');

    // Redirect to login after 1.5s, optionally pre-fill email
    setTimeout(() => {
      router.push(`/login?email=${encodeURIComponent(form.email)}`);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4">
      <HeaderOne text={'Sign-up with Cnxt'} />
      <MainText text={'Connect and be one of us'} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name..."
            className="rounded-[10px] border-none p-[20px] shadow-custom-primary placeholder:font-serif placeholder:text-mainGray focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email..."
            className="rounded-[10px] border-none p-[20px] shadow-custom-primary placeholder:font-serif placeholder:text-mainGray focus:outline-none"
            required
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Your country..."
            className="rounded-[10px] border-none p-[20px] shadow-custom-primary placeholder:font-serif placeholder:text-mainGray focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number..."
            className="rounded-[10px] border-none p-[20px] shadow-custom-primary placeholder:font-serif placeholder:text-mainGray focus:outline-none"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Your address..."
            className="rounded-[10px] border-none p-[20px] shadow-custom-primary placeholder:font-serif placeholder:text-mainGray focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Your password..."
            className="rounded-[10px] border-none p-[20px] shadow-custom-primary placeholder:font-serif placeholder:text-mainGray focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-[10px] bg-primary px-[20px] py-[12px] font-semibold text-white transition hover:opacity-90"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
