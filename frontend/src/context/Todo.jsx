import { createContext } from "react";

const initialState = {
  todoList: [],
};

export const TodoContext = createContext({
  todoList: [],
  deleteTodo: () => {},
});

export const TodoContextProvider = (props) => {
  return (
    <TodoContext.Provider value={{ todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

const todos = [
  {
    title: "Task 1",
    description: "This a description of a task",
  },
  {
    title: "Task 2",
    description: "This a description of a task",
  },
  {
    title: "Task 3",
    description: "This a description of a task",
  },
  {
    title: "Task 4",
    description: "This a description of a task",
  },
  {
    title: "Task 5",
    description: "This a description of a task",
  },
];
