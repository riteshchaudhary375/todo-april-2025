import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/Todo";
import TodoNotFound from "./TodoNotFound";
import LoadingSpinner from "./LoadingSpinner";
import DeletePopUpModal from "./DeletePopUpModal";
import toast from "react-hot-toast";

const TodoItems = ({ search }) => {
  const { fetching, todos, setTodos, error, setError, fetchTodos } =
    useContext(TodoContext);
  // console.log("Todos: ", todos);

  const [showModal, setShowModal] = useState(false);
  const [deleteTodoID, setDeleteTodoID] = useState(null);
  // console.log("deleteTodo id: ", deleteTodoID);

  const [checkStatus, setCheckStatus] = useState("");
  // console.log("checkStatus:", checkStatus);

  const handleCheckToggle = async (todoId) => {
    try {
      // console.log("TodoId:", todoId);
      const res = await fetch(`/api/todo/toggleTodo/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          complete: checkStatus,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      if (res.ok) {
        fetchTodos();
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // delete todo
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
        toast.error(data.message);
        return;
      }
      if (res.ok) {
        setError(null);
        setShowModal(false);
        setTodos((prev) => prev.filter((todo) => todo._id !== deleteTodoID));
        toast.success(data.message);
      }
    } catch (error) {
      setShowModal(false);
      setError(error.message);
      toast.error(error.message);
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
          search={search}
          setCheckStatus={setCheckStatus}
          onCheckToggle={handleCheckToggle}
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
