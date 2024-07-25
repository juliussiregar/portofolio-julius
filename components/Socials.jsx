'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/julius-siregar-164a85213/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/juliussiregar',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/qw.juliusgokil',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/juliussiregarrr/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
