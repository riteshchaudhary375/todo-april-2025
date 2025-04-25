import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DeletePopUpModal from "./DeletePopUpModal";

const TodoItem = ({ title, description, index }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td>{index}</td>
        <td className="">{title}</td>
        <td className="line-clamp-1">{description}</td>
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

      {/* Delete Popup Modal */}
      {showModal && <DeletePopUpModal setShowModal={setShowModal} />}
    </>
  );
};

export default TodoItem;
