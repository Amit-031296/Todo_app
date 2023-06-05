import React, { FC, useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ITask, TaskContextType } from "../Interfaces";

const NewTodoForm : FC = () => {
    const { addTask } = useContext(TodoContext) as TaskContextType;
    const [task, setTask] = useState<ITask | {}>();
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
    
    setTask({taskName : e.currentTarget.value})
    };
    const handleSaveTodo = (e: React.FormEvent, formData: ITask | any) => {
    e.preventDefault();
    addTask(formData);
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
    };
    return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, task)}>
        <div>
        <div>
            <label htmlFor="name">Type Todo here</label>
            <input onChange={handleForm} type="text" id="todo"  />
        </div>
        </div>
        <input type='submit' value="add todo" />
    </form>
    );
}
 
export default NewTodoForm;