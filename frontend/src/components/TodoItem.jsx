import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TodoItem = () => {
  return (
    <>
      <tr>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td>1</td>
        <td className="">MERkjwhduw</td>
        <td className="line-clamp-1">
          Complete Todo application Complete Todo application Complete Todo
          application Complete Todo application Complete Todo application
          Complete Todo application
        </td>
        <td>
          <span className="flex items-center justify-center gap-4">
            <BsFillTrashFill
              title="Delete"
              className="text-red-500 hover:text-red-600 cursor-pointer"
            />
            <Link to={"/edit-todo"}>
              <BsFillPencilFill
                title="Edit"
                className="text-blue-500 hover:text-blue-600  cursor-pointer"
              />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td>2</td>
        <td>Frontend</td>
        <td className="line-clamp-1">
          Complete Todo application Complete Todo application Complete Todo
          application Complete Todo application Complete Todo application
          Complete Todo application
        </td>
        <td>
          <span className="flex items-center justify-center gap-2">
            <BsFillTrashFill />
            <BsFillPencilFill />
          </span>
        </td>
      </tr>
      <tr>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td>3</td>
        <td>MERN</td>
        <td className="line-clamp-1">Complete Todo application</td>
        <td>
          <span className="flex items-center justify-center gap-2">
            <BsFillTrashFill />
            <BsFillPencilFill />
          </span>
        </td>
      </tr>
      <tr>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td>4</td>
        <td>Frontend</td>
        <td className="line-clamp-1">
          Complete Todo application Complete Todo application Complete Todo
          application Complete Todo application Complete Todo application
          Complete Todo application
        </td>
        <td>
          <span className="flex items-center justify-center gap-2">
            <BsFillTrashFill />
            <BsFillPencilFill />
          </span>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
