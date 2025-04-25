import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = () => {
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
      <tbody className="">
        <TodoItem />
      </tbody>
    </table>
  );
};

export default TodoItems;
