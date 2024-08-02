'use client';
import CountUp from 'react-countup';

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className='text-3xl text-primary'>{icon}</div>
      <div className='flex flex-col items-center gap-x-2'>
        <div className='text-2xl sm:text-4xl leading-none font-bold text-primary'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className='max-w-[50px] sm:max-w-[70px] leading-none text-[12px] sm:text-[15px] font-medium text-black text-center'>
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
