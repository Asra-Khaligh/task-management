'use client';
import localFont from "next/font/local";
import { cn } from '../../../utils/cn';

const inter = localFont({ src: '../../../../public/fonts/Mali-Medium.ttf' })

const Projects = ({className}, ref) => {
    return (
        <div className="group mb-9 text-left">
            <div className='text-2xl m-3'>
                your projects
            </div>
            <div className='text-xl h-14 w-308 border-b-[1px] border-white-500/50 flex justify-center flex-col '>
                <p className={cn('m-14 stroke-black font-outline-2 stroke-2' , inter.className)}>task management</p>
            </div>
            <div className='text-xl h-14 w-308 border-b-[1px] border-white-500/50 flex justify-center flex-col '>
                <p className={cn('m-14 stroke-black font-outline-2 stroke-2' , inter.className)}>task management2</p>
            </div>
            <div className='text-xl h-14 w-308 border-b-[1px] border-white-500/50 flex justify-center flex-col '>
                <p className={cn('m-14 stroke-black font-outline-2 stroke-2' , inter.className)}>task management3</p>
            </div>
        </div>
    );
};

export default Projects;
