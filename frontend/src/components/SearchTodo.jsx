import React from "react";
import "./SearchTodo.css";

const SearchTodo = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by Title..."
        className="searchBox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchTodo;
