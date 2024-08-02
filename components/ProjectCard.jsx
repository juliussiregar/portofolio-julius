import Link from 'next/link';
import Image from "next/legacy/image";
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative max-w-full'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[150px] sm:h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-0 shadow-2xl'
            src={project.image}
            layout='fill'
            objectFit='cover'
            alt=''
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-2 sm:gap-x-4'>
            <Link
              href={project.link} target='_blank'
              className='bg-secondary w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Link2Icon className='text-white' />
            </Link>
            <Link
              href={project.github} target='_blank'
              className='bg-secondary w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Github className='text-white' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-4 py-4 sm:px-8 sm:py-6'>
        <Badge className='uppercase text-xs font-medium mb-1 sm:mb-2 absolute top-2 sm:top-4 left-3 sm:left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1 sm:mb-2 text-base sm:text-lg'>{project.name}</h4>
        <p className='text-muted-foreground text-sm sm:text-lg'>{project.description}</p>
      </div>
    </Card>

  );
};

export default ProjectCard;
