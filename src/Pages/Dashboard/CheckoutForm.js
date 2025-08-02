import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { _id, name, total_price, email } = order;

  useEffect(() => {
    fetch(
      "https://688e6942001c954b2b6e.syd.appwrite.run/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ total_price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [total_price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setCardSuccess("");

    // confirm payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setCardSuccess("Congratulation! Successfully Paid.");

      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://688e6942001c954b2b6e.syd.appwrite.run/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      }).then((res) => res.json());
    }
  };
  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <CardElement
          className="w-10/12"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn rounded btn-success btn-sm px-6 mb-1 text-white"
          type="submit"
          disabled={!stripe || !clientSecret || cardSuccess}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error text-sm">{cardError}</p>}
      {cardSuccess && (
        <div>
          <p className="text-success text-sm">{cardSuccess}</p>
          <p className="text-sm">
            Transaction ID:{" "}
            <span className="text-accent font-medium">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
