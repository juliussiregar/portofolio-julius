import Link from 'next/link';
import Image from "next/legacy/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image 
        src='/logo.svg' 
        width={54} 
        height={54} 
        priority 
        alt='Logo' 
        className='filter dark:invert' 
      />
    </Link>
  );
};

export default Logo;
