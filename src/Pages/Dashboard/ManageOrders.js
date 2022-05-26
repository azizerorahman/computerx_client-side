import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://computerx.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const [deleteOrder, setDeleteOrder] = useState(null);

  if (isLoading) {
    return <Loading>h-screen</Loading>;
  }

  return (
    <div>
      <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
        Manage all orders
      </h3>
      <h2 className="mb-3 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
        Total Users: {orders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Part Name</th>
              <th>Order By</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <ManageOrderRow
                key={order._id}
                order={order}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
        {deleteOrder && (
          <DeleteOrderModal
            deleteOrder={deleteOrder}
            setDeleteOrder={setDeleteOrder}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
