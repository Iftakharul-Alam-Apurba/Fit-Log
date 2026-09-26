import Image from "next/image";
import Link from "next/link";

import { Iworkout } from "../types/workout";

interface WorkoutCardProps {
  workout: Iworkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14181f] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/50 hover:shadow-xl hover:shadow-[#c8ff00]/5"
    >
      <div className="relative h-60 w-full overflow-hidden bg-gray-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscleGroup) => (
            <span
              key={muscleGroup}
              className="rounded bg-[#c8ff00] px-2 py-0.5 text-[10px] font-black uppercase text-black"
            >
              {muscleGroup}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors group-hover:text-[#c8ff00]">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-400">
            {workout.equipment}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3.5 text-xs font-semibold text-gray-400">
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 text-[#c8ff00]"
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
    </Link>
  );
};

export default WorkoutCard;
