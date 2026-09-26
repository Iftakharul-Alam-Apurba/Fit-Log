"use client";

import Image from "next/image";
import Link from "next/link";

import { useFitLog } from "@/app/context/FitLogContext";
import { Iworkout } from "@/app/types/workout";

interface PlanCardProps {
  workout: Iworkout;
}

export default function PlanCard({ workout }: PlanCardProps) {
  const { removeFromPlan, markAsDone, completed } = useFitLog();

  const isCompleted = completed.includes(workout.id);

  return (
    <div
      className={`group relative flex flex-col justify-between gap-4 rounded-2xl border bg-[#14181f] p-4 transition-all sm:flex-row sm:items-center ${
        isCompleted
          ? "border-[#c8ff00]/30"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-900 sm:h-24 sm:w-36">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className={`object-cover object-center ${
              isCompleted ? "opacity-50" : ""
            }`}
          />
        </div>

        <div className="space-y-1">
          <h3
            className={`text-base font-black uppercase tracking-tight sm:text-lg ${
              isCompleted ? "text-gray-500 line-through" : "text-white"
            }`}
          >
            {workout.name}
          </h3>

          <p className="text-xs font-medium text-gray-400">
            {workout.equipment}
          </p>

          <div className="flex items-center gap-4 pt-1 text-xs font-semibold text-gray-400">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <path strokeWidth="2" d="M12 7v5l3 3" />
              </svg>

              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-[#c8ff00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
              </svg>

              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#c8ff00]">★</span>

              <span>{workout.rating}</span>
            </div>
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
          onClick={() => markAsDone(workout.id)}
          disabled={isCompleted}
          className={`rounded-full px-4 py-2 text-xs font-black uppercase transition-all ${
            isCompleted
              ? "bg-white/10 text-gray-500"
              : "bg-[#c8ff00] text-black hover:bg-[#b5e600] active:scale-95"
          }`}
        >
          {isCompleted ? "✓ Done" : "Mark as Done"}
        </button>

        <button
          type="button"
          onClick={() => removeFromPlan(workout.id)}
          aria-label="Remove workout"
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-2xl leading-none text-gray-400 transition-colors hover:bg-white/10 hover:text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
