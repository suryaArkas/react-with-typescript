import React, { useState } from "react";
import Todos from "../../components/Todos";
import Todo from "../todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDOHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const onRemoveHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };
  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addToDOHandler,
    removeTodo: onRemoveHandler,
  };
  return <TodoContext.Provider value={contextValue}>{
      props.children
  }</TodoContext.Provider>;
};
export default TodoContextProvider;