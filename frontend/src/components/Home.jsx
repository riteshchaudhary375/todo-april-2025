import React, { useState } from "react";
import Title from "./Title";
import TodoNav from "./TodoNav";
import TodoItems from "./TodoItems";

const Home = () => {
  const [search, setSearch] = useState("");
  // console.log("Search value: ", search);

  return (
    <div>
      <Title text={"TODO App"} />
      <TodoNav search={search} setSearch={setSearch} />
      <TodoItems search={search} />
    </div>
  );
};

export default Home;
