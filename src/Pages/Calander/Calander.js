import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Calander = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='mx-5' >

            <div className="flex justify-center mt-5 rou " >


                <div className='flex justify-center rounded-xl bg-slate-400 shadow-xl p-5  w-1/4'>
                    <DayPicker 
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>






            </div>

        </div>
    );
};

export default Calander;