import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} layout='fill' objectFit='contain' fill priority alt='' />
    </div>
  );
};

export default DevImg;
