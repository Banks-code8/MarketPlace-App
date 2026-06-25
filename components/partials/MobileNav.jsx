'use client';

import { useState } from 'react';
import { Drawer } from 'rizzui';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

import MainButton from '../button/MainButton';
import { useAuthStore } from '@/hooks/useAuth';

export default function MobileNav() {
  const [drawerState, setDrawerState] = useState(false);

  const { user, isAuthenticated, logout } = useAuthStore();

  const closeDrawer = () => setDrawerState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      closeDrawer();
    }
  };

  return (
    <>
      {/* MENU BUTTON */}
      <button onClick={() => setDrawerState(true)} className="block md:hidden">
        <RiMenu3Fill size={34} />
      </button>

      {/* DRAWER */}
      <Drawer
        isOpen={drawerState}
        onClose={closeDrawer}
        placement="left"
        size="sm"
      >
        <div className="flex min-h-full flex-col bg-white">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b px-5 py-4">
            <h1 className="text-xl font-bold">Authenticator</h1>

            <button onClick={closeDrawer}>
              <IoClose size={28} />
            </button>
          </div>

          {/* BODY */}
          <div className="flex flex-col gap-4 p-5">
            {/* NOT AUTHENTICATED */}
            {!isAuthenticated && (
              <Link href="/sign-up" onClick={closeDrawer}>
                <MainButton
                  text="Sign Up / Login"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </Link>
            )}

            {/* AUTHENTICATED */}
            {isAuthenticated && user && (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeDrawer}
                  className="py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>

                {user.role === 'admin' && (
                  <Link
                    href="/admin"
                    onClick={closeDrawer}
                    className="py-2 text-sm font-medium"
                  >
                    Admin Panel
                  </Link>
                )}

                <Link
                  href="/profile"
                  onClick={closeDrawer}
                  className="py-2 text-sm font-medium"
                >
                  Profile
                </Link>

                <div className="flex flex-col gap-8">
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
              </>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}
