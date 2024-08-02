import Image from "next/legacy/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} relative w-full h-[200px] sm:h-auto`}>
      <Image src={imgSrc} layout='fill' objectFit='contain' priority alt='' />
    </div>

  );
};

export default DevImg;
