import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const AddTaskContext = createContext({})
export const AddTaskProvider = ({ children }) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [tasks, setTask] = useState([])
  const [filter,setFilter]= useState([])

  const { data: allTasks, isLoading, isError, refetch } = useQuery('tasks', () =>
    fetch('http://localhost:8000/allTask').then((res) => res.json())

  );
  useEffect(() => {
    if (allTasks) {
      setTask(allTasks);
      setFilter(allTasks)
    }
  }, [allTasks]);


  return <AddTaskContext.Provider value={{ isAddTaskOpen, setIsAddTaskOpen, tasks,setTask, isLoading, refetch
    ,filter,setFilter
   }}> {children} </AddTaskContext.Provider>
}
