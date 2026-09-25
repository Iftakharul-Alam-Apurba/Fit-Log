import WorkoutCard from "./WorkoutCard";
import { Iworkout } from "../types/workout";

const getWorkouts = async (): Promise<Iworkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Iworkout[] = await res.json();

  return data;
};

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="w-full py-8 sm:py-12"
    >
      <div className="container mx-auto px-4 sm:px-8">

        {/* Section Heading */}
        <div className="mb-8 space-y-1">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            THE LIBRARY
          </h2>

          <p className="text-xs font-medium text-gray-400 sm:text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkoutLibrary;