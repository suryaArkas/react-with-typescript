import React, { useContext } from 'react';
import { useRef } from 'react';
import { TodoContext } from '../models/store/todo-context';
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () =>{
    const todoCtx = useContext(TodoContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(todoTextInputRef.current!.value)
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0){
            return;
        }
        todoCtx.addTodo(enteredText);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label>ToDo</label>
            <input type = 'text' id='text' ref={todoTextInputRef}/>
            <button>ADD TODO</button>
        </form>
    );

}

export default NewTodo;