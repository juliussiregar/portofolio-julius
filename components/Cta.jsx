import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-12 sm:py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto px-4 sm:px-0'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='h2 max-w-full sm:max-w-xl text-center mb-6 sm:mb-8 text-lg sm:text-xl'>
            I’m eager to contribute and grow with a new opportunity. Let’s discuss how I can support your team.
          </h2>
          <Link href='/contact'>
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>

  );
};

export default Cta;
