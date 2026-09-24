import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-6 sm:py-8">
      {/* Same container as Navbar */}
      <div className="container mx-auto px-4 sm:px-8">

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#14181f] p-6 sm:p-10 lg:p-14">

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

            {/* Left Content */}
            <div className="space-y-5 lg:col-span-7">

              {/* Eyebrow */}
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#c8ff00]">
                WORKOUT LIBRARY
              </span>

              {/* Heading */}
              <h1 className="text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                TRAIN WITH INTENT.
                <br className="hidden sm:inline" />
                LOG EVERY SET.
              </h1>

              {/* Description */}
              <p className="max-w-xl text-xs leading-relaxed text-gray-400 sm:text-sm">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today&apos;s plan, and watch the week&apos;s work
                add up.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="#library"
                  className="inline-block rounded-md bg-[#c8ff00] px-6 py-3.5 text-xs font-black tracking-wider text-black transition-all hover:bg-[#b5e600] active:scale-95"
                >
                  BROWSE WORKOUTS
                </Link>
              </div>

            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative h-64 w-full max-w-sm sm:h-80 lg:h-[340px]">
                <Image
                  src="/banner.png"
                  alt="Fitness illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}