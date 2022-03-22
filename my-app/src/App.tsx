import "./App.css";
import "./components/Todos";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./models/store/todo-context";

function App() {
  // const todos = [new Todo("Learn TypeScript"), new Todo("Learn React")];

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
