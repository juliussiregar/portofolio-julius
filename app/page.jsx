// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main className="space-y-8 md:space-y-16">
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
