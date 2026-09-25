"use client";

import { Iworkout } from "@/app/types/workout";

interface WorkoutActionsProps {
  workout: Iworkout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const handleAddToPlan = () => {
    console.log("Add to plan:", workout.id);
  };

  const handleSave = () => {
    console.log("Save workout:", workout.id);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-4">

      {/* Add to Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        className="flex items-center gap-2 rounded-lg bg-[#c8ff00] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#b5e600] active:scale-95"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        <span>Add to today's plan</span>
      </button>

      {/* Save */}
      <button
        type="button"
        onClick={handleSave}
        className="flex items-center gap-2 rounded-lg border border-white/20 bg-[#14181f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/5 active:scale-95"
      >
        <svg
          className="h-4 w-4 text-[#c8ff00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>

        <span>Save for later</span>
      </button>

    </div>
  );
}