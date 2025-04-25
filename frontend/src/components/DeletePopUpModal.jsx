import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const DeletePopUpModal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-opacity-5 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full sm:w-[500px]">
        <div className="popUpBackground">
          <AiOutlineExclamationCircle className="w-12 h-12 object-cover justify-center gap-4" />
          <h3>Are you sure you want to delete it?</h3>
          <div className="flex gap-4">
            <button className="deleteButton">Yes</button>
            <button
              className="cursor-pointer hover:underline"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUpModal;
