import React from "react";
import Title from "./Title";
import TodoNav from "./TodoNav";
import TodoItems from "./TodoItems";

const Home = () => {
  return (
    <div>
      <Title text={"TODO App"} />
      <TodoNav />
      <TodoItems />
    </div>
  );
};

export default Home;
