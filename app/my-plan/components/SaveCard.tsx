"use client";

import Image from "next/image";
import Link from "next/link";

import { useFitLog } from "@/app/context/FitLogContext";
import { Iworkout } from "@/app/types/workout";

interface SavedCardProps {
  workout: Iworkout;
}

export default function SavedCard({ workout }: SavedCardProps) {
  const { removeFromSaved } = useFitLog();

  return (
    <div className="group relative flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#14181f] p-4 transition-all hover:border-white/20 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-900 sm:h-24 sm:w-36">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-black uppercase tracking-tight text-white sm:text-lg">
            {workout.name}
          </h3>

          <p className="text-xs font-medium text-gray-400">
            {workout.equipment}
          </p>
          <div className="flex items-center gap-4 pt-1 text-xs font-semibold text-gray-400">
            <span>{workout.duration} min</span>

            <span>{workout.caloriesBurned} kcal</span>

            <span>
              <span className="text-yellow-400">★</span>{" "}
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 pt-2 sm:justify-end sm:pt-0">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:border-white/40 hover:bg-white/10"
        >
          View Details
        </Link>
        <button
          type="button"
          onClick={() => removeFromSaved(workout.id)}
          aria-label="Remove saved workout"
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-2xl leading-none text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
        >
          ×
        </button>
      </div>
    </div>
  );
}