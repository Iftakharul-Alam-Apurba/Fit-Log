import Hero from '@/app/components/Hero';
import WorkoutLibrary from './components/WorkoutLibrary';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e1015]">
      <Hero />

      <section id="library">
        <WorkoutLibrary />
      </section>
    </main>
  );
}