'use client';

import { cn } from '../../../utils/cn';

const Label = ({className , Color , Title}, ref) => {
    const color = Color
    const title = Title
    return (
        <div className="group flex flex-row ">
            <div className={cn(
                'bg-blue text-white text-sm p-0.5 m-1 ml-4 mt-2.5 w-20 rounded',
                className ,
                //'bg-['+color+']'
                'bg-[#000000]'
            )}>
                {title}
            </div>
        </div>
    );
};

export default Label;