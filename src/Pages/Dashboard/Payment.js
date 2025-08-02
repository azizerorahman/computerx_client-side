import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(`https://688e6942001c954b2b6e.syd.appwrite.run/payment/order/${id}`, {
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
    <div className="hero">
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mr-3">
        <div className="card-body">
          <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
            Payment
          </h3>
          <h2 className="mb-1 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
            Hi! {name},
          </h2>
          <h2 className="text-center lg:text-left lg:text-2xl">
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
