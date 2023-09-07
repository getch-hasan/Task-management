import React, { useEffect, useState } from 'react';
import Task from './Task';
import useAddTask from '../Hooks/useAddTask';
import UseSpinner from '../Hooks/UseSpinner';



const Projects = () => {
    const { tasks, isLoading } = useAddTask()
    console.log(tasks)
    if (isLoading) {
        return <UseSpinner></UseSpinner>
    }
    return (
        <div>
            <div className='grid grid-cols-1 justify-between gap-4 mt-5  lg:grid-cols-3 md:grid-cols-2 '>
                {
                    tasks.map(task => <Task
                        task={task}
                        key={task._id}

                    ></Task>)
                }
            </div>
        </div>
    );
};

export default Projects;