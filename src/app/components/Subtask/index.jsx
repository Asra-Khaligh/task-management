'use client';

import Label from "../Label";

const Subtask = ({ className , Name}, ref) => {
    const name = Name
    return (
        <div className="group mb-9" >
            <div className="rounded-2xl bg-bgSubtask flex-1 w-296 m-auto">
                <div className='bg-coverSubtask text-white rounded-tl-2xl rounded-tr-2xl w-300 h-8'>

                </div>
                <Label Color='#890C0C' Title='sub'/>
                <div className='text-xl text-black text-left pb-3 m-1 ml-4 mt-3 mb-3'>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Subtask;
