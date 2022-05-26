import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1V26EGLQAu3n49DvzRk3ORotZcg6JRDukcgFx6uNpii87hrz0EEWb5CK34zdyumPl4oTy6buemvlVobBHlFvNF002Lfj4g93"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/orders/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { name, part_name, amount, total_price } = order;

  return (
    <div class="hero">
      <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100 mr-3">
        <div class="card-body">
          <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
            Payment
          </h3>
          <h2 className="mb-1 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
            Hi! {name},
          </h2>
          <h2 class="text-center lg:text-left lg:text-2xl">
            Confirm your order by payment, you are paying for{" "}
            <span className="text-accent">{part_name}.</span>
          </h2>
          <div className="stats my-8">
            <div className="stat pl-0">
              <div className="stat-title text-center">Order Amount</div>
              <div className="stat-value lg:text-6xl text-secondary text-center">
                {amount}
              </div>
            </div>
            <div className="stat pr-0">
              <div className="stat-title text-center">Pay</div>
              <div className="stat-value lg:text-6xl text-primary text-center">
                ${total_price}
              </div>
            </div>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
