import React, { useContext } from "react";
import { TodoContext } from "../models/store/todo-context";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"


const Todos: React.FC = () => {
    const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem key= {item.id} text = {item.text} onRemoveItem={todoCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
