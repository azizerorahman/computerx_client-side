import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import usePart from "../../hooks/usePart";
import Abc from "./Abc";

const Purchase = () => {
  const [user] = useAuthState(auth);

  const [part] = usePart();
  const { name, image_url, min_order } = part;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-screen lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="lg:w-6/12 lg:pt-0 pt-10">
          <img src={image_url} alt="" />
        </div>
        <div className="lg:w-5/12">
          <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
            Confirm Order
          </h3>
          <h2 className="mb-10 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
            {name}
          </h2>
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
                {...register("phone", {
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
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-error pt-1">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "pattern" && (
                  <span className="label-text-alt text-error pt-1">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="from-control">
              <label className="label p-0">
                <span className="label-text">Address</span>
              </label>
              <textarea
                className="textarea focus:outline-offset-0 textarea-bordered w-full text-base pb-0.5 font-medium"
                placeholder="Moonshine St. 14/05 Light City, London, United Kingdom"
                {...register("address", {
                  required: {
                    value: true,
                    message: "*Enter your address",
                  },
                })}
              ></textarea>
              <label className="label pt-0">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <Abc min_order={min_order}></Abc>
            <div className="form-control mt-6">
              <input
                className="btn btn-accent text-white"
                type="submit"
                value="Log In"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
