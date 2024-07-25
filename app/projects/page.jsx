import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

const ProjectPage = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='h1 mb-4'>My Projects</h1>
          <p className='subtitle max-w-3xl mx-auto'>
            Here’s a closer look at some of the projects I’ve worked on. Each project represents a piece of my journey, showcasing my dedication to delivering high-quality solutions.
          </p>
        </div>
        <div className='grid gap-8 lg:grid-cols-2'>
          {projectData.map((project, index) => (
            <Card key={index} className='group overflow-hidden relative'>
              <CardHeader className='p-0'>
                {/* image */}
                <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
                  <Image
                    className='absolute bottom-0 shadow-2xl'
                    src={project.image}
                    width={400}
                    height={400}
                    alt={project.name}
                    priority
                  />
                  {/* btn links */}
                  <div className='flex gap-x-4'>
                    <Link
                      href={project.link} target='_blank'
                      className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                    >
                      <Link2Icon className='text-white' />
                    </Link>
                    <Link
                      href={project.github} target='_blank'
                      className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
                    >
                      <Github className='text-white' />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <div className='px-8 py-6'>
                <Badge className='uppercase text-xs font-medium mb-2'>
                  {project.category}
                </Badge>
                <h4 className='h4 mb-1'>{project.name}</h4>
                <p className='text-muted-foreground text-lg'>{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link href='/' passHref>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
