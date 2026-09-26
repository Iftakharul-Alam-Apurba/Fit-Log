"use client";

import Link from "next/link";
import { useFitLog } from "@/app/context/FitLogContext";

export default function NavBadges() {
  const { plan, saved } = useFitLog();

  return (
    <div className="flex items-center gap-5 text-xs font-semibold">
      <Link
        href="/my-plan"
        className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
      >
        <span>Plan</span>

        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c8ff00] text-[11px] font-extrabold text-black">
          {plan.length}
        </span>
      </Link>

      <Link
        href="/my-plan"
        className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
      >
        <span>Saved</span>

        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-[10px] font-bold text-gray-400">
          {saved.length}
        </span>
      </Link>
    </div>
  );
}