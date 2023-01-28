import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { _id, part_name, amount, name } = deleteOrder;

  const handleDelete = () => {
    fetch(`https://computerx.onrender.com/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order is Deleted!`);
          setDeleteOrder(null);
          refetch();
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            onClick={() => setDeleteOrder(null)}
            className="btn btn-sm btn-ghost text-2xl absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>
          <h3 className="font-bold text-lg">
            Are you sure you want to delete the order of {part_name}?
          </h3>
          <p className="py-4">
            The order is by {name} and amount is {amount}.
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderModal;
