import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/Todo";

const TodoItems = () => {
  const { todos } = useContext(TodoContext);

  return (
    <table className="table-auto w-full border border-gray-400 rounded-sm text-left">
      <thead className="bg-gray-400 border-b border-gray-500 uppercase text-gray-800">
        <tr className="font-medium">
          <th>Status</th>
          <th>S.N.</th>
          <th>Title</th>
          <th className="expand">Description</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            title={todo.title}
            description={todo.description}
            index={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoItems;
