import React, { useContext, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DeletePopUpModal from "./DeletePopUpModal";
import { TodoContext } from "../context/Todo";

const TodoItem = ({ todos }) => {
  const { tableHeadTags } = useContext(TodoContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <table className="table-auto w-full border border-gray-400 rounded-sm text-left">
        <thead className="bg-gray-400 border-b border-gray-500 uppercase text-gray-800">
          <tr className="font-medium">
            {/* <th>Status</th>
                <th>S.N.</th>
                <th>Title</th>
                <th className="expand">Description</th>
                <th className="text-center">Actions</th> */}
            {tableHeadTags &&
              tableHeadTags.map((headTitle, index) => (
                <th key={index}>{headTitle}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo, index) => (
              <tr key={index} className="border border-b-gray-300">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td className="">{todo.title}</td>
                <td className="">{todo.description}</td>
                <td>
                  <span className="flex items-center justify-center gap-4">
                    <BsFillTrashFill
                      title="Delete"
                      className="text-red-500 hover:text-red-600 cursor-pointer"
                      onClick={() => setShowModal(true)}
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
            ))}
        </tbody>
      </table>

      {/* Delete Popup Modal */}
      {showModal && <DeletePopUpModal setShowModal={setShowModal} />}
    </>
  );
};

export default TodoItem;
