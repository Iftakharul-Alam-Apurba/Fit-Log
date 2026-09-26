"use client";

import Link from "next/link";
import { useState } from "react";

import { useFitLog } from "@/app/context/FitLogContext";
import PlanCard from "./PlanCard";
import SavedCard from "./SaveCard";

export default function PlanContent() {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const isPlanTab = activeTab === "plan";
  const currentWorkouts = isPlanTab ? plan : saved;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentWorkouts.reduce(
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
            {currentWorkouts.length}
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
          onClick={() => setActiveTab("plan")}
          className={`border-b-2 px-4 py-3 text-xs font-black uppercase tracking-wider transition-colors ${
            isPlanTab
              ? "border-[#c8ff00] text-[#c8ff00]"
              : "border-transparent text-gray-500 hover:text-white"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`border-b-2 px-4 py-3 text-xs font-black uppercase tracking-wider transition-colors ${
            !isPlanTab
              ? "border-[#c8ff00] text-[#c8ff00]"
              : "border-transparent text-gray-500 hover:text-white"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Content */}
      {currentWorkouts.length === 0 ? (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111419] px-6 text-center">
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-500 sm:text-sm">
            {isPlanTab
              ? "Browse the library and add a lift to get today moving."
              : "Save a workout from the library to find it here later."}
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
          {currentWorkouts.map((workout) =>
            isPlanTab ? (
              <PlanCard key={workout.id} workout={workout} />
            ) : (
              <SavedCard key={workout.id} workout={workout} />
            )
          )}
        </div>
      )}
    </div>
  );
}