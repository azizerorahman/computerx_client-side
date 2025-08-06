import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const CancelOrderModal = ({ cancelOrder, setCancelOrder, refetch }) => {
  const { _id, part_name, amount, total_price } = cancelOrder;

  const handleDelete = () => {
    fetch(`https://68932db7001a18c6e02b.syd.appwrite.run/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order is Deleted!`);
          setCancelOrder(null);
          refetch();
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="cancel-order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            onClick={() => setCancelOrder(null)}
            className="btn btn-sm btn-ghost text-2xl absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>
          <div className="px-3">
            <h3 className="font-bold text-xl mt-2 text-natural">
              Are you sure you want to cancel this order?
            </h3>
            <p className="py-4 text-info">
              The order was for {part_name}, amount was {amount} and the payment
              for this order was {total_price}.
            </p>
            <small className="py-6 text-info text-xs">
              *Sorry to see you canceling the order, Thanks for using{" "}
              <span className="text-accent font-medium">Computerex</span>.
            </small>
            <div className="modal-action">
              <button
                onClick={() => handleDelete()}
                className="btn btn-sm text-white btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelOrderModal;
