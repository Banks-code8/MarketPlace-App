'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import MainButton from '../button/MainButton';
import MobileNav from './MobileNav';
import { useAuthStore } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import SearchForm from '../form/SearchForm';
import { RiHeartLine, RiShoppingCart2Line } from 'react-icons/ri';
import CartIcon from '../icon/CartIcon';
import WishlistIcon from '../icon/WishlistIcon';

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const initialized = useAuthStore((state) => state.initialized);
  const getUserData = useAuthStore((state) => state.getUserData);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();
  useEffect(() => {
    getUserData();
  }, []);

  if (!initialized) {
    return null; // or a loading skeleton
  }

  const initials =
    user?.fullName
      ?.split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase() || '';

  const isAdmin = user?.role === 'admin';

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between bg-black/5 px-[6vw] py-[4vh] shadow-lg backdrop-blur-lg">
        {/* Logo */}
        <Link href="/" className="hidden md:block">
          <h1 className="text-[28px] font-bold tracking-tight">Marketplace</h1>
        </Link>
        <Link href="/" className="block md:hidden">
          <h1 className="text-[28px] font-bold tracking-tight">MP</h1>
        </Link>
        <div className="hidden w-full px-4 md:block">
          {' '}
          <SearchForm />
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <Link href="/login">
              <MainButton text="Sign In" />
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Link href="/dashboard">
                  <MainButton text="Dashboard" />
                </Link>
              )}
              <Link href={'/wishlist'}>
                {' '}
                <WishlistIcon />{' '}
              </Link>
              <Link href={'/cart'}>
                {' '}
                <CartIcon />{' '}
              </Link>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                {initials}
              </div>
              <div className="hidden gap-8 md:flex">
                <Link href="/upload">
                  <MainButton
                    text="Sell Now"
                    bgColor={'bg-primary'}
                    textColor={'text-white'}
                  />
                </Link>

                <button
                  onClick={handleLogout}
                  className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <MobileNav />
        </div>
      </div>{' '}
      <div className="block p-[10px] md:hidden">
        {' '}
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
