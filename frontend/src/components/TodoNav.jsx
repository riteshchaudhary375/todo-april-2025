import React from "react";
import SearchTodo from "./SearchTodo";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import "./TodoNav.css";

const TodoNav = () => {
  return (
    <div className="todoNav">
      <SearchTodo />

      <Link to={"/create-todo"}>
        <div className="createNewTodobutton">
          <FaPlus />
          <span className="px-4">Create New</span>
        </div>
      </Link>
    </div>
  );
};

export default TodoNav;
