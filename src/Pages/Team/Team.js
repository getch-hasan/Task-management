

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
                </div>
            </div>
        </div>
    );
};

export default Team;