import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#090b0d] py-6 sm:py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-8">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-black uppercase tracking-wider text-white transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo 11.06.45 PM.png"
            alt="FitLog Logo"
            width={32}
            height={32}
          />

          <span>FITLOG</span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs font-medium text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}