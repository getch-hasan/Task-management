import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Dashboard = () => {

    // const { tasks } = useAddTask()
    // tasks.forEach(task => {
    //     console.log(task)

    // });
    //  fetch(`http://localhost:8000/allTask/start/${task.status}`,
    //      {
    //          method: 'GET',
    //          headers: {
    //              'content-type': 'application/json'
    //          }
    //      }

    //  )
    //      .then(res => {
    //          if (res.status === 403) {
    //              // toast.error('Failed to make an Admin')
    //          }
    //          return res.json()
    //      })
    //      .then(data => {
    //          if (data.result.modifiedCount > 0) {

    //              //toast.success('successfully made an admin')


    //          }
    //          console.log(data)
    //      });
    return (
        <div className='mx-5'>
            <h1 className='text-4xl font-extrabold text-blue-400 text-start ms-5'>Overview</h1>
            <div className='grid grid-cols-3 gap-4 justify-between mt-5 '>
                <div className='bg-[#fc95b4] rounded-xl grid gap-3 py-2'>
                    <h1 className='text-2xl font-semibold'>Pending Task</h1>
                    <h1 className='text-4xl font-bold'>4</h1>
                </div>
                <div className='bg-[#ffcE62] rounded-xl grid gap-3 py-2'>
                    <h1 className='text-2xl font-semibold'>Processing</h1>
                    <h1 className='text-4xl font-bold'>2</h1>
                </div>
                <div className='bg-[#EB7B26] rounded-xl grid gap-3 py-2'>
                    <h1> <img alt="" /></h1>
                    <h1 className='text-2xl font-semibold'>Complete Task</h1>
                    <h1 className='text-4xl font-bold'>3</h1>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;