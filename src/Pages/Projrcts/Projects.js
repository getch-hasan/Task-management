import React, { useEffect, useState } from 'react';
import Task from './Task';
import useAddTask from '../Hooks/useAddTask';
import UseSpinner from '../Hooks/UseSpinner';
import Category from './Filter';



const Projects = () => {
    const { filter, isLoading,refetch } = useAddTask()
  
    if (isLoading) {
        return <UseSpinner></UseSpinner>
    }
    return (
        <div>
            <div>
                <Category></Category>
            </div>
            <div className='grid grid-cols-1 justify-between gap-4 mt-5  lg:grid-cols-3 md:grid-cols-2 '>
                {
                    filter.map(task => <Task
                        task={task}
                        key={task._id}
                        refetch={refetch}

                    ></Task>)
                }
            </div>
        </div>
    );
};

export default Projects;