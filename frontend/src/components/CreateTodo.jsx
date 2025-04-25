import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const CreateTodo = () => {
  return (
    <>
      <Title text={"Create Todo"} />

      <form className="text-left">
        <div className="flex flex-col gap-4">
          <input className="" type="text" placeholder="Title..." required />
          <textarea name="" id="" placeholder="Description..." rows={"5"} />
        </div>

        <div className="createTodoDivButton">
          <Link to="/" className="hover:underline">
            Back
          </Link>
          <button type="submit" className="createNewTodobutton">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTodo;
