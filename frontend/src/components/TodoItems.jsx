import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/Todo";
import TodoNotFound from "./TodoNotFound";
import LoadingSpinner from "./LoadingSpinner";

const TodoItems = () => {
  const { fetching, todos } = useContext(TodoContext);
  // console.log("Todos: ", todos);

  return (
    <>
      {fetching && <LoadingSpinner />}

      {/* {!fetching && todos && todos.length === 0 && <TodoNotFound />} */}
      {/* {!fetching && todos && todos.length > 0 && <TodoItem todos={todos} />} */}

      {!fetching && todos && todos.length > 0 ? (
        <TodoItem todos={todos} />
      ) : (
        <TodoNotFound />
      )}
    </>
  );
};

export default TodoItems;
