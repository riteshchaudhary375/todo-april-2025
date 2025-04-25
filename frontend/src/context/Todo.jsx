import { createContext, useState } from "react";

const initialState = {
  todoList: [],
};

export const TodoContext = createContext({
  todoList: [],
  deleteTodo: () => {},
  fetching: false,
});

export const TodoContextProvider = (props) => {
  const tableHeadTags = ["Status", "S.N.", "Title", "Description", "Actions"];

  const [todos, setTodos] = useState([]);
  const [fetching, setFetching] = useState(false);

  return (
    <TodoContext.Provider value={{ tableHeadTags, fetching, todos }}>
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
