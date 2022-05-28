import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddPart = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { name, price, min_order, quantity, description, image_url } = data;
    const newPart = {
      name: name,
      image_url: image_url,
      price: price,
      quantity: quantity,
      min_order: min_order,
      description: description,
    };

    // send data to server
    fetch("https://radiant-gorge-88164.herokuapp.com/parts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newPart),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${name} successfully added.`);
        reset();
      });
  };

  return (
    <div>
      <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-2 lg:mb-4 font-bold">
        Add a Part
      </h3>
      <h2 className="mb-6 font-bold text-neutral text-center lg:text-left lg:text-3xl text-xl">
        Hi! {user.displayName}, Add a Part to The Part's Collection.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="pr-4">
        <div className="form-control">
          <label className="label pb-0">
            <span className="label-text">Part Name</span>
          </label>
          <input
            type="text"
            placeholder="CXM Mouse 3B"
            className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
            {...register("name", {
              required: {
                value: true,
                message: "*Please enter Name of the Part",
              },
            })}
          />
          <label className="label py-0">
            {errors.name && (
              <span className="label-text-alt text-error pt-1">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label pb-0">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="$"
            className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
            {...register("price", {
              required: {
                value: true,
                message: "*Enter a Price of Part",
              },
              min: {
                value: 1,
                message: "*Price must be Positive number",
              },
              pattern: {
                value: /^\+?(0|[0-9]\d*)$/,
                message: "*Please enter a number as Price",
              },
            })}
          />
          <label className="label py-0">
            {errors.price && (
              <span className="label-text-alt text-error pt-1">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label pb-0">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="text"
            placeholder="100"
            className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
            {...register("min_order", {
              required: {
                value: true,
                message: "*Please enter a Minimum Order Quantity",
              },
              min: {
                value: 1,
                message: "*Minimum Order Quantity must be Positive number",
              },
              pattern: {
                value: /^\+?(0|[0-9]\d*)$/,
                message: "*Please enter a number as Minimum Order Quantity",
              },
            })}
          />
          <label className="label py-0">
            {errors.min_order && (
              <span className="label-text-alt text-error pt-1">
                {errors.min_order.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label pb-0">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="text"
            placeholder="100"
            className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
            {...register("quantity", {
              required: {
                value: true,
                message: "*Please enter Quantity of the Part",
              },
              min: {
                value: 1,
                message: "*Available Quantity must be Positive number",
              },
              pattern: {
                value: /^\+?(0|[0-9]\d*)$/,
                message: "*Please enter a number as Available Quantity",
              },
            })}
          />
          <label className="label py-0">
            {errors.quantity && (
              <span className="label-text-alt text-error pt-1">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label pb-0">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Write something about the Part"
            className="textarea focus:outline-offset-0 textarea-bordered text-base pb-0.5 font-medium"
            {...register("description", {
              required: {
                value: true,
                message: "*Please add description of the Part",
              },
            })}
          ></textarea>
          <label className="label py-0">
            {errors.description && (
              <span className="label-text-alt text-error pt-1">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label pb-0">
            <span className="label-text">Picture URL</span>
          </label>
          <input
            type="text"
            placeholder="example.com/part.png"
            className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
            {...register("image_url", {
              required: {
                value: true,
                message: "*Please provide a picture URL of the Part",
              },
              pattern: {
                value:
                  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                message: "*Please enter a valid link",
              },
            })}
          />
          <label className="label py-0">
            {errors.image_url && (
              <span className="label-text-alt text-error pt-1">
                {errors.image_url.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control my-6">
          <input
            className="btn btn-accent text-white"
            type="submit"
            value="Add Part"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPart;
