import React, { FC, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ITask, TaskContextType } from "../Interfaces";

type Props = {
    task: ITask;
}


const TodoDetails:FC<Props> = ( { task }) => {
    const { addTask } = useContext(TodoContext) as TaskContextType;
    const { removeTask } = useContext(TodoContext) as TaskContextType;
    return ( 
        <li onClick={() => removeTask(task.id)}>
            <div className='taskName'>{ task.taskName }</div>
        </li>
     );
}
 
export default TodoDetails;
