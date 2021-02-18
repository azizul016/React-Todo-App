import React, { useContext } from "react";
import { UserContext } from "../../App";
import Todo from "./Todo";

function TodoList() {
    const {todos, setTodos, filterTodos} = useContext(UserContext)
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {
            filterTodos?.map(todo => <Todo key={todo.id} todo={todo}/>)
          }
      </ul>
    </div>
  );
}

export default TodoList;
