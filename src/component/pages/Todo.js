import React, { useContext } from "react";
import { UserContext } from "../../App";

function Todo({ todo }) {
  const { todos, setTodos } = useContext(UserContext);

  //for delete todos
  const deleteHandler = (e) => {
    setTodos(todos?.filter((el) => el.id !== todo.id));
  };

  //for complete todos
  const completeHandler = (e) => {
   setTodos(
    todos?.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
   )
  };

  
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
