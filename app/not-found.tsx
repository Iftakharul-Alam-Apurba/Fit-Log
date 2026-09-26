import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#0e1015] px-4">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c8ff00]">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          WORKOUT NOT FOUND
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-500">
          The workout or page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-[#c8ff00] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#b5e600] active:scale-95"
        >
          GO TO WORKOUTS
        </Link>
      </div>
    </div>
  );
}