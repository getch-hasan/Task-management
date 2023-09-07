import  { useContext } from 'react';
import { AddTaskContext } from '../Context/AddTaskContext';

const useAddTask = () => {
    return useContext(AddTaskContext);
};

export default useAddTask;