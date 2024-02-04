import Task from "../components/Task";
import Sidebar from "../components/Sidebar";

export default function page() {
    return (
        <div className='flex flex-row flex-wrap items-start content-start'>
            <Sidebar />
            <Task />
            <Task />
            <Task />
        </div>
)
}