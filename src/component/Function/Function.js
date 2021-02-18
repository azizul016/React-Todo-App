export  const filterHandle = (setFilterTodos, todos, status ) => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilterTodos(todos);
        break;
    }
  };

  export   const getLocalStorage = (setTodos) => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let getData = JSON.parse(localStorage.getItem("todos"));
      setTodos(getData);
    }
  };

 export const setLocalStorage = (todos) => {
      localStorage.setItem("todos", JSON.stringify(todos));
   
  };
//  export const setLocalStorage = (todos) => {
//     if (localStorage.getItem("todos" === null)) {
//       localStorage.setItem("todos", JSON.stringify([]));
//     } else {
//       localStorage.setItem("todos", JSON.stringify(todos));
//     }
//   };