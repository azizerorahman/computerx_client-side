import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { review, rating } = data;
    const newReview = {
      name: user.displayName,
      review: review,
      rating: parseInt(rating),
    };

    fetch("https://radiant-gorge-88164.herokuapp.com/reviews", {
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
          toast.success("Review Successfully Added!");
          reset();
        } else {
          toast.error("Failed to add Review");
        }
      });
  };
  return (
    <div className="pr-2">
      <h3 className="tracking-widest text-secondary text-xs uppercase mb-3 font-bold">
        Add a new review
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Text</span>
          </label>
          <textarea
            type="text"
            placeholder="Write a review text here"
            className="textarea focus:outline-offset-0 textarea-bordered text-base font-medium"
            {...register("review", {
              required: {
                value: true,
                message: "*Write your review",
              },
            })}
          ></textarea>
          <label className="label py-0">
            {errors.review && (
              <span className="label-text-alt text-error pt-1">
                {errors.review.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            placeholder="Out of 5"
            className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
            {...register("rating", {
              required: {
                value: true,
                message: "*Enter a rating out of 5",
              },
              pattern: {
                value: /^[-+]?[0-9]+$/,
                message: "*Please enter a number that is an integer number",
              },
              max: {
                value: 5,
                message: "The rating could not be greater than 5",
              },
              min: {
                value: 0,
                message: "The rating could not be less than 0",
              },
            })}
          />
          <label className="label py-0">
            {errors.rating && (
              <span className="label-text-alt text-error pt-1">
                {errors.rating.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-accent text-white"
            type="submit"
            value="Add Review"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
