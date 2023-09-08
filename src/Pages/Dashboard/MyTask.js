import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import UseSpinner from '../Hooks/UseSpinner';
import MySingleTask from './MySingleTask';

const MyTask = () => {
    const [user] = useAuthState(auth)
    const { data: myTasks, isLoading, refetch } = useQuery(['orders'], () =>
        fetch(`http://localhost:8000/myTask?email=${user?.email}`,

        ).then((res) => res.json())

    );

    console.log(myTasks);
    if (isLoading) {
        return <UseSpinner></UseSpinner>;
    }
    return (
        <div>
            <h1 className='mt-10 text-2xl font-bold text-center '>My Created Projects </h1>
           <hr className='mt-2' />
            <div className='grid grid-cols-1 justify-between gap-4 mt-5  lg:grid-cols-3 md:grid-cols-2 '>
                {
                    myTasks.map(task => <MySingleTask
                        task={task}
                        key={task._id}
                        refetch={refetch}

                    ></MySingleTask>)
                }
            </div>
        </div>
    );
};

export default MyTask;