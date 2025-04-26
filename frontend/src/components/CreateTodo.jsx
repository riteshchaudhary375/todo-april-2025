import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "./Title";
import { TodoContext } from "../context/Todo";
import toast from "react-hot-toast";

const CreateTodo = () => {
  const { fetchTodos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(title).length === 0) return setError("No change made!");

    if (!title || title === "") {
      return setError("Title required!");
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/todo/create-todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        setError(data.message);
        toast.error(data.message);
        return;
      }
      if (res.ok) {
        setLoading(false);
        setError(null);
        fetchTodos();
        navigate("/");
        toast.success(data.message);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Title text={"Create Todo"} />

      <form className="text-left" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            id="title"
            type="text"
            // maxlength="15"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            name=""
            id="description"
            // maxlength="20"
            placeholder="Description..."
            rows={"5"}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="createTodoDivButton">
          <Link to="/" className="hover:underline">
            Back
          </Link>
          <button
            disabled={loading}
            type="submit"
            className="createNewTodobutton"
          >
            Submit
          </button>
        </div>

        {/* error */}
        {error && (
          <p className="text-red-500 text-xs">{error || error.message}</p>
        )}
      </form>
    </>
  );
};

export default CreateTodo;
