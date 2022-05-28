import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css";
import CancelOrderModal from "./CancelOrderModal";

const OrderRow = ({ order, refetch }) => {
  const {
    _id,
    part_image,
    part_name,
    delivery_address,
    delivery_phone,
    amount,
    total_price,
    status,
    transactionId,
  } = order;

  const [cancelOrder, setCancelOrder] = useState(null);

  return (
    <>
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
          {delivery_address}
          <br />
          <span className="badge badge-ghost badge-sm">{delivery_phone}</span>
        </td>
        <td className="text-center">{amount}</td>
        <th>
          {!status && (
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-accent btn-xs text-white">Pay</button>
            </Link>
          )}
          {status === "pending" && <span className="text-success">Paid</span>}
        </th>
        <th>
          {!status && (
            <label
              onClick={() => setCancelOrder(order)}
              htmlFor="cancel-order-modal"
              className="btn btn-error btn-xs text-white"
            >
              Cancel
            </label>
          )}
        </th>
      </tr>
      {cancelOrder && (
        <CancelOrderModal
          cancelOrder={cancelOrder}
          setCancelOrder={setCancelOrder}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default OrderRow;
