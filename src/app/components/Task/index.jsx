'use client';

import Label from "../Label";
import Subtask from "../Subtask";
import Link from "next/link";

const Task = ({className}, ref) => {
    return (
        <div className="group flex flex-col ml-3 ">
            <div className="rounded-2xl bg-bgTask flex-1 w-340">
                <div className='flex ml-5 mt-5'>
                    <div className='text-black text-2xl'>
                        task A
                    </div>
                    <div className='mt-1.5 ml-52'>
                        <img src="icons/more_icon.svg" alt="sss"/>
                    </div>
                </div>

                <div className='flex ml-3'>
                    <Label className='ml-10' Color='#000000' Title='hello' />
                    <div className='flex mr-10'>
                        <div className='bg-bgStatus text-white text-sm p-0.5 m-1 ml-4 mt-2.5 mr-0.5 w-20 h-6 rounded'>
                            DOING
                        </div>
                        <div className='bg-bgStatus text-white text-sm p-0.5 m-1 ml-0 mt-2.5 w-6 h-6 rounded'>
                            <img src="icons/icon_arrow_downward.svg" alt="sss"/>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <Subtask className='' Name='sub1'/>
                    <Subtask className='' Name='subtask 2'/>
                </div>
                <div>
                    <Link className='flex ml-4 mb-2' href='#'>
                        <img className="flex-initial w-6 " src="icons/plus__icon.svg" alt="sss"/>
                        <div className='flex-initial text-black text-xl text-left'>
                            Add a subtask
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Task;