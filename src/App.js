import "./App.css";
import "./style.css";
import Form from "./component/pages/Form";
import TodoList from "./component/pages/TodoList";
import { createContext, useEffect, useState } from "react";
import { filterHandle, getLocalStorage, setLocalStorage } from "./component/Function/Function";

export const UserContext = createContext();
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //get local storage
  useEffect(()=>{
    // getLocalStorage();
    getLocalStorage(setTodos);
  }, [])

  //set local storage and filter
  useEffect(() => {
    // filterHandle();
    filterHandle(setFilterTodos, todos, status );
    // setLocalStorage();
    setLocalStorage(todos);
    
  }, [todos, status]);


  //removing this page; create a new function page;

  // const setLocalStorage = () => {
  //   if (localStorage.getItem("todos" === null)) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }
  // };
  // const getLocalStorage = () => {
  //   if (localStorage.getItem("todos" === null)) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let getData = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(getData);
  //   }
  // };

  // const filterHandle = () => {
  //   switch (status) {
  //     case "completed":
  //       setFilterTodos(todos.filter((todo) => todo.completed === true));
  //       break;

  //     case "uncompleted":
  //       setFilterTodos(todos.filter((todo) => todo.completed === false));
  //       break;

  //     default:
  //       setFilterTodos(todos);
  //       break;
  //   }
  // };

  return (
    <UserContext.Provider
      value={{
        inputText,
        setInputText,
        todos,
        setTodos,
        status,
        setStatus,
        filterTodos,
      }}
    >
      <div className="App">
        <header>
          <h1>Azizul's Todo List</h1>
        </header>
        <main>
          <Form />
          <TodoList />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
