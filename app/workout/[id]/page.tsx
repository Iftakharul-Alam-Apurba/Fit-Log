import Image from "next/image";
import { notFound } from "next/navigation";

import WorkoutActions from "./WorkoutActions";
import { Iworkout } from "@/app/types/workout";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getWorkoutDetails(id: string): Promise<Iworkout | null> {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return null;
  }

  return await res.json();
}

export default async function WorkoutDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const workout = await getWorkoutDetails(id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="w-full py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Main Details */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-[#14181f] shadow-2xl">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 lg:col-span-7">
            {/* Title + Description */}
            <div className="space-y-3">
              <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                {workout.name}
              </h1>

              <p className="text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
                {workout.description}
              </p>

              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2 pt-1">
                {workout.muscleGroups.map((muscleGroup) => (
                  <span
                    key={muscleGroup}
                    className="rounded-full bg-[#c8ff00] px-3 py-1 text-[11px] font-extrabold uppercase text-black"
                  >
                    {muscleGroup}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#14181f] p-4 sm:p-5">
              <div className="divide-y divide-white/5 text-xs font-semibold">
                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Equipment
                  </span>

                  <span className="text-white">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Difficulty
                  </span>

                  <span className="text-white">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Sets
                  </span>

                  <span className="text-white">
                    {workout.sets}
                  </span>
                </div>

                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Reps
                  </span>

                  <span className="text-white">
                    {workout.reps}
                  </span>
                </div>

                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Duration
                  </span>

                  <span className="text-white">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Calories
                  </span>

                  <span className="text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between py-2.5">
                  <span className="uppercase tracking-wider text-gray-400">
                    Rating
                  </span>

                  <span className="text-[#c8ff00]">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-black uppercase tracking-widest text-white">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-3 text-xs text-gray-300 sm:text-sm">
                {workout.instructions.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="font-bold text-[#c8ff00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Interactive Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}
