import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer text-xl sm:text-2xl' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-4 sm:py-8'>
          <div className='flex flex-col items-center gap-y-16 sm:gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-4 sm:gap-y-6'
              linkStyles='text-xl sm:text-2xl'
            />
          </div>
          <Socials containerStyles='flex gap-x-2 sm:gap-x-4' iconsStyles='text-xl sm:text-2xl' />
        </div>
      </SheetContent>
    </Sheet>

  );
};

export default MobileNav;
