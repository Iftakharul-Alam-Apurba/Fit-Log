import PlanContent from "./components/PlanContent";

export default function MyPlanPage() {
  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            MY PLAN
          </h1>

          <p className="text-xs font-medium text-gray-400 sm:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <PlanContent />

      </div>
    </section>
  );
}