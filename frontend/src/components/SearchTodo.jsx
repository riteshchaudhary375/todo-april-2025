import React from "react";
import "./SearchTodo.css";

const SearchTodo = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by Title..."
        className="searchBox"
      />
    </>
  );
};

export default SearchTodo;
