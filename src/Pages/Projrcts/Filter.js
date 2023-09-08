
import React, { useState } from 'react';
import useAddTask from '../Hooks/useAddTask';


const Category = () => {
    // const [products,setProducts]=Allhotel()
    const [activeButton, setActiveButton] = useState(null);
    const { tasks, setFilter} = useAddTask()

    // console.log(products)
    const handleCategory = (status) => {
        console.log(tasks)
        if (typeof status === 'string') {
            setActiveButton(status);
            const filtered = tasks.filter((task) => {
                // Check if task.status is a string and contains the status
                return typeof task.status === 'string' && task.status.includes(status);
            });
            setFilter(filtered);
            console.log(status);
        } else {
            // Handle the case where status is not a string
            console.error('Invalid status:', status);
        }
    };

    return (
        <div className="grid grid-cols-4 bg-white justify-center py-6 ps-24  w-full top-28">
            <button
                className={`${activeButton === 'Pending' ? 'border-b-2 border-black w-1/3 mb-2' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('Pending')}
            >
                Pending
            </button>
            <button
                className={`${activeButton === 'Progress' ? 'border-b-2 border-black mb-2 w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('Progress')}
            >
                Progress
            </button>
            <button
                className={`${activeButton === 'Complete' ? 'border-b-2 border-black w-1/3 mb-2 ' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('Complete')}
            >
                Complete
            </button>
            <button
                className={`${activeButton === '' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('')}
            >
                Last date
            </button>

        </div>
    );
};

export default Category;