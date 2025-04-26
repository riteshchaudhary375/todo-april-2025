import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Title from "./Title";
import { TodoContext } from "../context/Todo";

const EditTodo = () => {
  const { fetchTodos, loading, setLoading, error, setError } =
    useContext(TodoContext);
  const { todoId } = useParams();
  // console.log(todoId);
  const navigate = useNavigate();

  const [toEditTodo, setToEditTodo] = useState({});
  // console.log("Todo to edit:", toEditTodo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // feftch todo from db using params todoId
  useEffect(() => {
    const fetchTodoById = async () => {
      await fetch(`/api/todo/get-todo/${todoId}`)
        .then((res) => res.json())
        .then((data) => {
          setToEditTodo(data.todoInfo);
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchTodoById();
  }, [todoId]);

  // submit update form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return setError("Title required!");

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/todo/edit-todo/${todoId}`, {
        method: "PUT",
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
        return;
      }
      if (res.ok) {
        setLoading(false);
        setError(null);
        fetchTodos();
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <Title text={"Edit Todo"} />

      <form className="text-left" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            className=""
            id="title"
            name="title"
            type="text"
            placeholder="Title..."
            // value={toEditTodo.title}
            defaultValue={toEditTodo.title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description..."
            rows={"5"}
            defaultValue={toEditTodo.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="updateTodoDivButton">
          <Link to="/" className="hover:underline">
            Back
          </Link>
          <button disabled={loading} type="submit" className="updateButton">
            {loading ? "Updating..." : "Update"}
          </button>
        </div>

        {/* Error message */}
        {error && <p className="text-xs text-red-600 mt-4">{error}</p>}
      </form>
    </>
  );
};

export default EditTodo;
