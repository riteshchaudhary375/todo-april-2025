import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext({
  todoList: [],
  deleteTodo: () => {},
  fetching: false,
  loading: false,
  error: null,
});

export const TodoContextProvider = (props) => {
  const tableHeadTags = ["Status", "S.N.", "Title", "Description", "Actions"];

  const [todos, setTodos] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. fetch all todos from DB
  /*   useEffect(() => {
    setFetching(true);

    fetch("/api/todo/get-all-todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched todos:", data);
        setFetching(false);
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log("Error message:", err);
        setFetching(false);
      });
  }, []); */

  const fetchTodos = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/todo/get-all-todos");
      const data = await res.json();
      if (res.ok) {
        setFetching(false);
        setTodos(data.todos);
      } else {
        setFetching(false);
        console.log(data.message);
      }
    } catch (error) {
      setFetching(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        tableHeadTags,
        fetching,
        todos,
        setTodos,
        fetchTodos,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

// const todos = [
//   {
//     title: "Task 1",
//     description: "This a description of a task",
//   },
//   {
//     title: "Task 2",
//     description: "This a description of a task",
//   },
//   {
//     title: "Task 3",
//     description: "This a description of a task",
//   },
//   {
//     title: "Task 4",
//     description: "This a description of a task",
//   },
//   {
//     title: "Task 5",
//     description: "This a description of a task",
//   },
// ];
