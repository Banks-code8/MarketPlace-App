'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/hooks/useAuth';

export default function AuthProvider({ children }) {
  const initialize = useAuthStore((state) => state.initialize);
  useEffect(() => {
    console.log('AuthProvider mounted');
    initialize();
  }, []);
  return children;
}
