"use client";

import Link from "next/link";
import { useFitLog } from "@/app/context/FitLogContext";

export default function PlanContent() {
  const { plan } = useFitLog();

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="space-y-8">

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3">

        <div className="rounded-2xl border border-white/10 bg-[#14181f] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Exercises
          </p>

          <p className="mt-2 text-2xl font-black text-white">
            {plan.length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#14181f] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Minutes
          </p>

          <p className="mt-2 text-2xl font-black text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#14181f] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Calories
          </p>

          <p className="mt-2 text-2xl font-black text-white">
            {totalCalories}
          </p>
        </div>

      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10">
        <button
          type="button"
          className="border-b-2 border-[#c8ff00] px-4 py-3 text-xs font-black uppercase tracking-wider text-[#c8ff00]"
        >
          Today&apos;s Plan
        </button>

        <button
          type="button"
          className="border-b-2 border-transparent px-4 py-3 text-xs font-black uppercase tracking-wider text-gray-500 transition-colors hover:text-white"
        >
          Saved
        </button>
      </div>

      {/* Plan */}
      {plan.length === 0 ? (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111419] px-6 text-center">

          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-500 sm:text-sm">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 rounded-lg bg-[#c8ff00] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#b5e600] active:scale-95"
          >
            GO TO WORKOUTS
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {plan.map((workout) => (
            <div
              key={workout.id}
              className="rounded-2xl border border-white/10 bg-[#14181f] p-5"
            >
              <h2 className="text-lg font-black uppercase text-white">
                {workout.name}
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                {workout.equipment}
              </p>

              <div className="mt-4 flex gap-6 text-xs text-gray-400">
                <span>{workout.duration} min</span>
                <span>{workout.caloriesBurned} kcal</span>
                <span>★ {workout.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}