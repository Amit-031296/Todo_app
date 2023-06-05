import React, { useContext, FC } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ITask, TaskContextType } from "../Interfaces";
import  TodoDetails  from "./TodoDetails"

const TodoList : FC = () => {
    
    const { tasks } = useContext(TodoContext) as TaskContextType;
    return tasks.length ? (
        <div className='task-list'>
            <ul>
                {
                    tasks.map((task: ITask)  => {
                        return (<TodoDetails task={task} key={task.id} />);
                    })
                }
            </ul>
        </div>
     ) : (
        <div className="empty"> No Todos free Time :)</div>
     )
}
 
export default TodoList;
