

import React from 'react';

const Team = () => {
    return (
        <div>
            <h1 className='text-2xl mt-5  font-semibold'>Create Your won team</h1>
            <div className='grid  justify-center  gap-4 mt-5'>
                <div className="shadow-md p-4 rounded-md">
                    <p>Team Name:< input className='border' type="text" /></p> <br />
                   <p> Select Team Member:
                   <select className='border' name="" id="" placeholder='sSelect Member'>
                        <option value="Hasan">Hasan</option>
                        <option value="Tareq">Tareq</option>
                        <option value="Munna">Munna</option>
                        <option value="Sayem">sayem</option>
                    </select>
                   </p>
                   <button className='border px-4 py-2 bg-orange-600 rounded-lg mt-4'> Submit</button>
                 
                </div>
                <p className='bg-yellow-200'>Actually i am not understand what i have do  hare after reading descriptions.But im confident about any task if understand what i have to do</p>
            </div>
        </div>
    );
};

export default Team;