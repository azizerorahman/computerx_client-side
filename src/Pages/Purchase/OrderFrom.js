import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const OrderFrom = ({ part, refetch }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { _id, name, min_order, quantity, image_url, price } = part;
  const [counter, setCounter] = useState(min_order);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const increaseCounter = () => {
    setCounter(parseInt(counter) + 1);
  };

  const decreaseCounter = () => {
    setCounter(parseInt(counter) - 1);
  };

  const onSubmit = (data) => {
    const { delivery_address, delivery_phone, amount } = data;
    const newReview = {
      name: user.displayName,
      email: user.email,
      part_name: name,
      part_image: image_url,
      delivery_address: delivery_address,
      delivery_phone: delivery_phone,
      amount: amount,
      total_price: price * counter,
    };

    const updatedQuantity = quantity - amount;
    const updatedPart = {
      quantity: updatedQuantity,
    };

    fetch("https://radiant-gorge-88164.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((insertedData) => {
        if (insertedData.insertedId) {
          fetch(`https://radiant-gorge-88164.herokuapp.com/parts/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updatedPart),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                refetch();
                toast.success("Successfully Added to Order!");
                reset();
              }
            });
        } else {
          toast.error("Failed to add as Order");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label pb-0">
          <span className="label-text">Name</span>
        </label>
        <input
          value={user?.displayName}
          className="input text-base pb-0.5 font-medium mb-1"
          disabled
        />
      </div>
      <div className="form-control">
        <label className="label pb-0">
          <span className="label-text">Email</span>
        </label>
        <input
          value={user?.email}
          className="input text-base pb-0.5 font-medium mb-1"
          disabled
        />
      </div>
      <div className="form-control">
        <label className="label pb-0">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="001234567890"
          className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
          {...register("delivery_phone", {
            required: {
              value: true,
              message: "*Enter a phone number",
            },
            pattern: {
              value: /^\+?(0|[0-9]\d*)$/,
              message:
                "*Please enter a valid phone number without space or dash",
            },
          })}
        />
        <label className="label pt-0">
          {errors.delivery_phone?.type === "required" && (
            <span className="label-text-alt text-error pt-1">
              {errors.delivery_phone.message}
            </span>
          )}
          {errors.delivery_phone?.type === "pattern" && (
            <span className="label-text-alt text-error pt-1">
              {errors.delivery_phone.message}
            </span>
          )}
        </label>
      </div>
      <div className="from-control">
        <label className="label p-0">
          <span className="label-text">Delivery Address</span>
        </label>
        <textarea
          className="textarea focus:outline-offset-0 textarea-bordered w-full text-base pb-0.5 font-medium"
          placeholder="Moonshine St. 14/05 Light City, London, United Kingdom"
          {...register("delivery_address", {
            required: {
              value: true,
              message: "*Enter your delivery address",
            },
          })}
        ></textarea>
        <label className="label pt-0">
          {errors.delivery_address?.type === "required" && (
            <span className="label-text-alt text-error">
              {errors.delivery_address.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control">
        <label className="label p-0">
          <span className="label-text">Enter Amount</span>
        </label>
        <div className="input-group">
          <button
            disabled={counter <= min_order}
            type="button"
            onClick={decreaseCounter}
            className="btn btn-square text-3xl pb-1.5 text-white"
          >
            -
          </button>
          <input
            value={counter}
            placeholder="Amount"
            type="text"
            className="input input-bordered focus:outline-offset-0 w-full text-base pb-0.5 font-medium"
            {...register("amount", {
              onChange: (e) => {
                setCounter(e.target.value);
              },
              required: {
                value: true,
                message: "*Enter Amount",
              },
              max: {
                value: `${quantity}`,
                message: "Please enter amount less than quantity.",
              },
              min: {
                value: `${min_order}`,
                message: "You have to enter amount greater than minimum order",
              },
              pattern: {
                value: /^[-+]?[0-9]+$/,
                message: "*Please enter a number as amount",
              },
            })}
          />
          <button
            disabled={counter >= quantity}
            type="button"
            onClick={increaseCounter}
            className="btn btn-square text-3xl pb-1.5 text-white"
          >
            +
          </button>
        </div>
        <label className="label pt-0">
          {errors.amount?.type === "required" && (
            <span className="label-text-alt text-error">
              {errors.amount.message}
            </span>
          )}
          {errors.amount?.type === "max" && (
            <span className="label-text-alt text-error">
              {errors.amount.message}
            </span>
          )}
          {errors.amount?.type === "min" && (
            <span className="label-text-alt text-error">
              {errors.amount.message}
            </span>
          )}
          {errors.amount?.type === "pattern" && (
            <span className="label-text-alt text-error">
              {errors.amount.message}
            </span>
          )}
        </label>
      </div>
      <div className="divider m-0"></div>
      <div className="flex justify-between font-bold text-info">
        <p>Total</p>
        <p>
          $ <span className="text-secondary">{price * counter}</span>
        </p>
      </div>
      <div className="form-control mt-6">
        <input
          disabled={
            errors.amount?.type === "min" || errors.amount?.type === "max"
          }
          className="btn btn-accent text-white"
          type="submit"
          value="Order"
        />
      </div>
    </form>
  );
};

export default OrderFrom;
