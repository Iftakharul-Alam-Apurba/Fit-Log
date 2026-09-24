'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className = '' }: NavLinksProps) {
  const pathname = usePathname();

  const isWorkoutPage = pathname === '/';
  const isPlanPage = pathname === '/my-plan';

  return (
    <nav className={`items-center gap-2 ${className}`}>
      <Link
        href="/"
        className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
          isWorkoutPage
            ? 'bg-[#c8ff00] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Workout
      </Link>

      <Link
        href="/my-plan"
        className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
          isPlanPage
            ? 'bg-[#c8ff00] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        My Plan
      </Link>
    </nav>
  );
}