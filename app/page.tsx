'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to MessMate</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Choose the type of accommodation you are looking for
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        <Link
          href="/pg"
          className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">PG</h2>
          <p className="text-gray-500">Browse available Paying Guest options near your college</p>
        </Link>

        <Link
          href="/mess"
          className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Mess</h2>
          <p className="text-gray-500">Find mess facilities with food and meal options</p>
        </Link>
      </div>
    </div>
  );
}
