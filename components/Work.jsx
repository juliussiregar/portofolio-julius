'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'My Portofolio',
    description:
      'A personal portfolio showcasing my skills and projects. Designed with a sleek and modern interface using Next.js, featuring smooth animations, responsive design, and a comprehensive overview of my work and achievements.',
    link: 'https://portofolio-julius.vercel.app/',
    github: 'https://github.com/juliussiregar/portofolio-julius',
  },
  {
    image: '/work/2.png',
    category: 'FullStack',
    name: 'Grosirun',
    description:
      'Developed as a full-stack application with a focus on the admin features. Includes comprehensive management modules for users, stock, products, categories, and vouchers/discounts. Implements a filter system, search bar with debounce, and suggestion search to enhance user experience. Optimized for mobile devices.',
    link: 'https://jcwd030802.purwadhikabootcamp.com/',
    github: 'https://github.com/purwadhikafullstack/JCWD0308-02',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'LSP PMBE (Company Profile)',
    description:
      'Built with Next.js to create a visually appealing company profile. Features autoplay video that activates on scroll, engaging and dynamic design elements, and a mobile-friendly interface. Focuses on delivering a professional and interactive user experience.',
    link: 'https://company-profile-julius.vercel.app/',
    github: 'https://github.com/juliussiregar/company-profile',
  },
  {
    image: '/work/4.png',
    category: 'FullStack',
    name: 'KitaTiketin',
    description:
      'A full-stack application developed with a focus on user authentication and authorization. Includes features for user management, event management, and discount management. Offers filtering and sorting options for events, ensuring a user-friendly experience and efficient navigation. Mobile-friendly design ensures accessibility on various devices.',
    link: '/',
    github: 'https://github.com/Julius-Yana/MINPRO-030814',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Explore my latest work, where innovation meets execution. Each project reflects my commitment to delivering high-quality and user-centric solutions.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[300px] sm:h-[400px] xl:h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
