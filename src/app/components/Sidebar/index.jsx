'use client';

import Label from "../Label";
import Projects from "../projects";

const Subtask = ({ className}, ref) => {
    return (
        <div className="group mb-9 h-848" >
            <div className="bg-[#2B2335] flex flex-col">
                <Projects />
                <Projects />
            </div>
        </div>
    );
};

export default Subtask;