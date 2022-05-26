import React from "react";

const ManageOrderRow = ({ order, setDeleteOrder }) => {
  const {
    _id,
    part_image,
    part_name,
    total_price,
    paid,
    transactionId,
    name,
    email,
  } = order;
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
            {paid ? (
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
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>
        {paid ? (
          <span className="text-success">Paid</span>
        ) : (
          <span className="text-info">Pending</span>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteOrder(order)}
          htmlFor="delete-order-modal"
          className="btn btn-secondary modal-button text-white btn-xs bg-error"
        >
          Delete Order
        </label>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
