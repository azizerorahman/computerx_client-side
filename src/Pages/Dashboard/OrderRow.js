import React from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

const OrderRow = ({ order, refetch }) => {
  const {
    _id,
    part_image,
    part_name,
    delivery_address,
    delivery_phone,
    amount,
    total_price,
    paid,
    transactionId,
  } = order;

  const handleDeleteItem = (id, part_name) => {
    confirmAlert({
      message: "Are you sure you want to delete it?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // send updated data to server
            const url = `https://computerx.herokuapp.com/orders/${id}`;
            fetch(url, {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  toast.success(`Order of ${part_name} deleted.`);
                  refetch();
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
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
        {delivery_address}
        <br />
        <span className="badge badge-ghost badge-sm">{delivery_phone}</span>
      </td>
      <td>{amount}</td>
      <th>
        {!paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-accent btn-xs text-white">Pay</button>
          </Link>
        )}
        {paid && <span className="text-success">Paid</span>}
      </th>
      <th>
        {!paid && (
          <button
            onClick={() => handleDeleteItem(_id, part_name)}
            className="btn btn-error btn-xs text-white"
          >
            Cancel
          </button>
        )}
      </th>
    </tr>
  );
};

export default OrderRow;
