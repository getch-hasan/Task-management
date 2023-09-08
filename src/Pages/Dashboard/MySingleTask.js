import React from 'react';
import UseTime from '../Hooks/useTime';

const MySingleTask = ({ task,refetch }) => {
    const { details, name, date, status,_id } = task
    const [timeLeft] = UseTime(date)
    const handleStart = () => {
        fetch(`http://localhost:8000/allTask/start/${_id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            }

        )
            .then(res => {
                if (res.status === 403) {
                    // toast.error('Failed to make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.result.modifiedCount > 0) {

                    //toast.success('successfully made an admin')
                    refetch()

                }
                console.log(data)
            });
    }
    const handleComplete = () => {
        fetch(`http://localhost:8000/allTask/complete/${_id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            }

        )
            .then(res => {
                if (res.status === 403) {
                    // toast.error('Failed to make an Admin')
                    console.log('error')
                }
                return res.json()
            })
            .then(data => {
                if (data.result.modifiedCount > 0) {

                    //toast.success('successfully made an admin')
                    refetch()

                }
                console.log(data)
            });
    }
    return (
        <div>
            <div className='grid  shadow-lg rounded-xl p-4 w-2/3 ms-20'>
                <div className='border-b-2 grid gap-1'><h1 className='text-start flex justify-between font-semibold text-lg'>{name} <  span className='text-lg font-semibold text-blue-600 border px-2 rounded-lg h-8'>  {status}</span></h1>
                    <p className='text-start'>{details}</p>
                    <p className='text-start '>Last date: <span className='font-bold'>{date}</span> </p>
                    <p className='text-start'>Time Left: <span className='text-red-700 font-semibold'>{timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s</span></p></div>
                <div className='  bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    {
                        status === 'Complete' ? <p>Done</p> : <div className='sm:flex sm:flex-row-reverse'><button onClick={() => handleComplete()} className=' h-10 top-0 btn ms-1  inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto'>Complete</button>
                            <button onClick={() => handleStart()} className=' h-10 top-0 btn ms-1 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>Start</button> </div>
                    }

                </div>
            </div >
        </div>
    );
};

export default MySingleTask;