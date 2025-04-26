import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/Todo";
import TodoNotFound from "./TodoNotFound";
import LoadingSpinner from "./LoadingSpinner";
import DeletePopUpModal from "./DeletePopUpModal";

const TodoItems = () => {
  const { fetching, todos, setTodos, error, setError } =
    useContext(TodoContext);
  // console.log("Todos: ", todos);

  const [showModal, setShowModal] = useState(false);
  const [deleteTodoID, setDeleteTodoID] = useState(null);
  // console.log("deleteTodo id: ", deleteTodoID);

  const handleDeleteTodo = async () => {
    try {
      setError(null);

      const res = await fetch(`/api/todo/delete-todo/${deleteTodoID}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        setShowModal(false);
        setError(data.message);
        return;
      }
      if (res.ok) {
        setError(null);
        setShowModal(false);
        setTodos((prev) => prev.filter((todo) => todo._id !== deleteTodoID));
      }
    } catch (error) {
      setShowModal(false);
      setError(error.message);
    }
  };

  return (
    <>
      {fetching && <LoadingSpinner />}

      {/* {!fetching && todos && todos.length === 0 && <TodoNotFound />} */}
      {/* {!fetching && todos && todos.length > 0 && <TodoItem todos={todos} />} */}

      {!fetching && todos && todos.length > 0 ? (
        <TodoItem
          todos={todos}
          setShowModal={setShowModal}
          setDeleteTodoID={setDeleteTodoID}
        />
      ) : (
        <TodoNotFound />
      )}

      {/* Delete Popup Modal */}
      {showModal && (
        <DeletePopUpModal
          setShowModal={setShowModal}
          onDeleteTodo={handleDeleteTodo}
        />
      )}

      {/* Error message */}
      {error && <p className="text-xs text-red-600 mt-4">{error}</p>}
    </>
  );
};

export default TodoItems;
