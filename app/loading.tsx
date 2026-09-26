export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0e1015]">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#c8ff00]"></span>

        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}