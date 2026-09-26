import Image from 'next/image';
import Link from 'next/link';

import NavLinks from './NavLinks';
import NavBadges from './NavBadges';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0e1015]/95 text-white backdrop-blur-md">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center text-lg font-black uppercase tracking-wider text-white transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo 11.06.45 PM.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            className="mr-2"
          />

          <span>FITLOG</span>
        </Link>

        <NavLinks className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2" />

        <NavBadges />
      </div>

      <div className="border-t border-white/5 px-4 py-2 md:hidden">
        <div className="container mx-auto">
          <NavLinks className="flex w-full" />
        </div>
      </div>
    </header>
  );
}