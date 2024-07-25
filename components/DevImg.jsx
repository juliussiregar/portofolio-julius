import Image from "next/legacy/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} layout='fill' objectFit='contain' fill priority alt='' />
    </div>
  );
};

export default DevImg;
