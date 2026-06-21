'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import MainButton from '../button/MainButton';
import MobileNav from './MobileNav';
import { useAuthStore } from '@/hooks/useAuth';

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const initialized = useAuthStore((state) => state.initialized);
  const getUserData = useAuthStore((state) => state.getUserData);
  const logout = useAuthStore((state) => state.logout);

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
        <Link href="/">
          <h1 className="text-[28px] font-bold tracking-tight">Marketplace</h1>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <Link href="/sign-up">
              <MainButton text="Sign Up / Login" />
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Link href="/dashboard">
                  <MainButton text="Dashboard" />
                </Link>
              )}

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                {initials}
              </div>

              <button
                onClick={handleLogout}
                className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
