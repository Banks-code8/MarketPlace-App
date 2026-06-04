'use client';
import React, { useState } from 'react';
import HeaderOne from '../typography/HeaderOne';
import MainText from '../typography/MainText';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/services/userService';
const LoginForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
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

    const res = await loginUser(form);

    if (!res.success) {
      toast.error(res.message || 'Login failed ❌');
      return;
    }

    // Save user/token in localStorage
    localStorage.setItem('lingoUser', JSON.stringify(res.data));

    toast.success('Logged in successfully 🎉');

    // Redirect to dashboard or home
    setTimeout(() => {
      router.push('/dashboard'); // change to your dashboard route
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <HeaderOne text={'Login'} />
      <MainText text={'Login into your Cnxt account'} />

      <form onSubmit={handleSubmit} className="flex w-80 flex-col gap-4">
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

        {/* Login Button */}
        <button
          type="submit"
          className="rounded-[10px] bg-primary px-[20px] py-[12px] font-semibold text-white transition hover:opacity-90"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
