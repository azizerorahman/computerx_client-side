import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    data: part,
    isLoading: partLoading,
    // refetch,
  } = useQuery(["part"], () =>
    fetch(`http://localhost:5000/purchase/${id}`).then((res) => res.json())
  );

  const { data: dbUser, isLoading: dbUserLoading } = useQuery(["abc"], () =>
    fetch(`http://localhost:5000/user/${user.email}`, {
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

  const { phone, location } = dbUser;
  const [newPhone, setNewPhone] = useState(phone);
  const [newLocation, setNewLocation] = useState(location);

  if (dbUserLoading) {
    return <Loading></Loading>;
  }

  if (partLoading) {
    return <Loading></Loading>;
  }

  const { name, image_url, min_order } = part;

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
                value={newPhone}
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
                  onChange: (e) => {
                    setNewPhone(e.target.value);
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
                value={newLocation}
                className="textarea focus:outline-offset-0 textarea-bordered w-full text-base pb-0.5 font-medium"
                placeholder="Moonshine St. 14/05 Light City, London, United Kingdom"
                {...register("address", {
                  required: {
                    value: true,
                    message: "*Enter your address",
                  },
                  onChange: (e) => {
                    setNewLocation(e.target.value);
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
