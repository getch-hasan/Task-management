import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const AddTaskContext = createContext({})
export const AddTaskProvider = ({ children }) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  
  const { data: tasks, isLoading, isError } = useQuery('tasks', () =>
    fetch('http://localhost:8000/allTask').then((res) => res.json())
  );


  return <AddTaskContext.Provider value={{ isAddTaskOpen, setIsAddTaskOpen, tasks, isLoading }}> {children} </AddTaskContext.Provider>
}
