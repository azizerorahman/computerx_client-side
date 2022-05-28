import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // get user orders from database
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders"], () =>
    fetch(`https://radiant-gorge-88164.herokuapp.com/orders/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-2 lg:mb-4 font-bold">
        My Orders
      </h3>
      <h2 className="mb-6 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
        Total Orders: {orders.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Parts Name</th>
              <th>Contact Info</th>
              <th className="text-center">Order Amount</th>
              <th>Pay</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                refetch={refetch}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
