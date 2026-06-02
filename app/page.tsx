import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { LifeInWeeks } from "@/components/LifeInWeeks";
import { Momentum } from "@/components/Momentum";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { getYearStats } from "@/lib/year-stats";

export default function Home() {
  const stats = getYearStats();

  return (
    <>
      <Header />
      <main>
        <Hero
          year={stats.year}
          percentComplete={stats.percentComplete}
          daysRemaining={stats.daysRemaining}
          weeksRemaining={stats.weeksRemaining}
        />
        <Problem />
        <Features />
        <LifeInWeeks />
        <Momentum />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
