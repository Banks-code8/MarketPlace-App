'use client';

import { useRouter } from 'next/navigation';

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Access Denied</h1>

      <button
        onClick={() => router.push('/')}
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Go Home
      </button>
    </div>
  );
}
