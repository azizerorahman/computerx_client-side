import React from "react";
import { toast } from "react-toastify";

const ManageOrderRow = ({ order, setDeleteOrder, refetch }) => {
  const {
    _id,
    part_image,
    part_name,
    total_price,
    status,
    transactionId,
    name,
    email,
  } = order;

  const setShippedOrder = () => {
    fetch(`https://radiant-gorge-88164.herokuapp.com/shipped/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Part Shipped Successfully");
        }
      });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={part_image} alt={part_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{part_name}</div>
            {status === "pending" ? (
              <div className="text-sm opacity-50">
                Transaction ID: {transactionId}
              </div>
            ) : (
              <div className="text-sm opacity-50">$ {total_price}</div>
            )}
          </div>
        </div>
      </td>
      <td>
        <span className="font-medium">{name}</span>
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td className="text-center">
        {status === "pending" && <span className="text-accent">Pending</span>}
        {status === "shipped" && <span className="text-accent">Approved</span>}
        {!status && <span className="text-accent">Unpaid</span>}
      </td>
      <td className="text-center">
        {!status && (
          <label
            onClick={() => setDeleteOrder(order)}
            htmlFor="delete-order-modal"
            className="btn modal-button text-white btn-xs btn-error"
          >
            Delete Order
          </label>
        )}
        {status === "pending" && (
          <button
            onClick={setShippedOrder}
            className="btn btn-secondary modal-button text-white btn-xs"
          >
            Shipped
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
