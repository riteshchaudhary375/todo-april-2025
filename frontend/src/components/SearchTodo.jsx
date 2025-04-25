import React from "react";
import "./SearchTodo.css";

const SearchTodo = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by Topic..."
        className="searchBox"
      />
    </>
  );
};

export default SearchTodo;
