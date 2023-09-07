import React from 'react';
import UseTime from '../Hooks/useTime';

const Task = ({ task }) => {

    const { name, date, details } = task
    const [timeLeft] = UseTime(date)

    return (
        <div className='grid  shadow-xl rounded-xl p-4 w-2/3 ms-20'>
            <div className='border-b-2 grid gap-1'><h1 className='text-start font-semibold text-lg'>{name}</h1>
                <p className='text-start'>{details}</p>
                <p className='text-start '>Last date: <span className='font-bold'>{date}</span> </p>
                <p className='text-start'>Time Left: <span className='text-red-700 font-semibold'>{timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s</span></p></div>
            <div className='  bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button className=' h-10 top-0 btn ms-1  inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto'>Complete</button>
                <button className=' h-10 top-0 btn ms-1 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>Start</button>

            </div>
        </div>
    );
};

export default Task;