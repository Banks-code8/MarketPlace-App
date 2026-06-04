'use client';
import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const LoginIcon = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem('lingoUser');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lingoUser');
    setUser(null);
    setOpen(false);
    router.push('/login');
  };

  if (!user) {
    return (
      <button
        className="rounded bg-primary px-3 py-1 text-white transition hover:opacity-90"
        onClick={() => router.push('/login')}
      >
        Login
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer transition hover:opacity-90"
        title={user.name || 'User'}
        onClick={() => setOpen(!open)}
      >
        {user.profilePic ? (
          <img
            src={user.profilePic}
            alt={user.name || 'User'}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle size={30} />
        )}
      </div>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded-md border bg-white shadow-lg">
          <div
            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            onClick={() => router.push('/dashboard')}
          >
            Profile
          </div>
          <div
            className="cursor-pointer px-4 py-2 text-red-500 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginIcon;
