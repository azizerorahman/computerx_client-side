import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order }) => {
  const {
    _id,
    part_image,
    part_name,
    delivery_address,
    delivery_phone,
    amount,
    total_price,
    paid,
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
            <div className="text-sm opacity-50">$ {total_price}</div>
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
    </tr>
  );
};

export default OrderRow;
