"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/app/context/FitLogContext";
import { Iworkout } from "@/app/types/workout";

interface PlanWorkoutCardProps {
  workout: Iworkout & {
    image?: string;
    imageUrl?: string;
    equipment?: string;
    duration?: number | string;
    calories?: number | string;
    rating?: number | string;
  };
}

export default function PlanCard({ workout }: PlanWorkoutCardProps) {
  const { removeFromPlan, markAsDone, completed } = useFitLog();

  // Fallback defaults for missing API properties
  const imageSrc = workout.image || workout.imageUrl || "/placeholder.png";
  const equipment = workout.equipment || "Bodyweight";
  const duration = workout.duration || 15;
  const calories = workout.calories || 120;
  const rating = workout.rating || 4.5;

  const isCompleted = completed.includes(workout.id);

  const handleMarkAsDone = () => {
    markAsDone(workout.id);
  };

  return (
    <div
      className={`group relative flex flex-col justify-between gap-4 rounded-2xl border bg-[#14181f] p-4 transition-all sm:flex-row sm:items-center ${
        isCompleted
          ? "border-[#c8ff00]/30"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      {/* Left Block: Thumbnail & Info */}
      <div className="flex items-center gap-4">
        {/* Thumbnail Image */}
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-900 sm:h-24 sm:w-36">
          <Image
            src={imageSrc}
            alt={workout.name}
            fill
            className={`object-cover object-center ${
              isCompleted ? "opacity-50" : ""
            }`}
          />
        </div>

        {/* Title, Subtitle & Metrics */}
        <div className="space-y-1">
          <h3
            className={`text-base font-black uppercase tracking-tight sm:text-lg ${
              isCompleted ? "text-gray-500 line-through" : "text-white"
            }`}
          >
            {workout.name}
          </h3>

          <p className="text-xs font-medium text-gray-400">
            {equipment}
          </p>

          {/* Metrics Row */}
          <div className="flex items-center gap-4 pt-1 text-xs font-semibold text-gray-400">
            {/* Duration */}
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

              <span>{duration} min</span>
            </div>

            {/* Calories */}
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

              <span>{calories} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 01-.364-1.118L2.98 8.72c-.783.57-.38 1.81.588 1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Block: Buttons & Remove Cross */}
      <div className="flex items-center justify-between gap-3 pt-2 sm:justify-end sm:pt-0">
        {/* View Details Button */}
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:border-white/40 hover:bg-white/10"
        >
          View Details
        </Link>

        {/* Mark as Done Button */}
        <button
          type="button"
          onClick={handleMarkAsDone}
          disabled={isCompleted}
          className={`rounded-full px-4 py-2 text-xs font-black uppercase transition-all ${
            isCompleted
              ? "bg-white/10 text-gray-500"
              : "bg-[#c8ff00] text-black hover:bg-[#b5e600] active:scale-95"
          }`}
        >
          {isCompleted ? "✓ Done" : "Mark as Done"}
        </button>

        {/* Remove Cross Button */}
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
