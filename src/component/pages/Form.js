import React, { useContext } from "react";
import { UserContext } from "../../App";

function Form() {
  const { inputText, setInputText, todos, setTodos, setStatus } = useContext(UserContext);

  //set input value in state
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //set todo list with information;
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    
    setInputText("");
  };

  //for filtering and change status todos;
  const statusHandler = e =>{
    setStatus(e.target.value)
}
  return (
    <div>
      <form>
        <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
