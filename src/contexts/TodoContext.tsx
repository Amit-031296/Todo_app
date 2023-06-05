import React, { createContext, useState } from 'react';
import { ITask, TaskContextType } from "../Interfaces";

type TodoContextProviderProps = {
    children : React.ReactNode
}


export const TodoContext = createContext<TaskContextType |null>(null);

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [tasks, setTasks] = useState<ITask[]>([
        {id:1, taskName:"Some task1"},
        {id:2, taskName:"Some task2"}
    ]);
    const addTask = (todo: ITask) => {
        const newTodo: ITask = {
            id: Math.floor(Math.random() * 100),
            taskName: todo.taskName,
          }
          setTasks([...tasks, newTodo]);
    };
    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    return (
        <TodoContext.Provider value={{tasks, addTask, removeTask}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;