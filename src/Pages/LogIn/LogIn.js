import React from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import "./LogIn.css";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (loading || googleLoading) {
    return <Loading>h-screen</Loading>;
  }

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="bg-[#f3f3fa] flex items-center justify-center lg:py-20">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5 mb-16 lg:m-0">
        <div className="card-body">
          <h2 className="mb-1 font-bold text-neutral text-center text-3xl">
            Log In
          </h2>
          <h3 className="text-center text-info mb-4">
            Don't have an account?{" "}
            <Link className="link link-secondary" to="/sign-up">
              Sign Up
            </Link>
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="email"
                placeholder=" &#xf0e0;  Email Address"
                className="input input-bordered input-icon text-base"
                {...register("email", {
                  required: {
                    value: true,
                    message: "*Enter an email",
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "*Please enter a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder=" &#xf070;  Password"
                className="input input-bordered input-icon text-base"
                {...register("password", {
                  required: {
                    value: true,
                    message: "*Enter a password",
                  },

                  minLength: {
                    value: 8,
                    message: "*Enter at least eight characters password",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "*Enter at least one number and one special character",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
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
              <label className="flex justify-center">
                {error && (
                  <span className="pt-2 label-text-alt text-error">
                    {error.message
                      .substring(22)
                      .replace(/[()']+/g, "")
                      .replace(/[-']+/g, " ")
                      .charAt(0)
                      .toUpperCase() +
                      error.message
                        .substring(22)
                        .replace(/[()']+/g, "")
                        .replace(/[-']+/g, " ")
                        .slice(1)}
                  </span>
                )}
              </label>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin
            signInWithGoogle={signInWithGoogle}
            googleError={googleError}
          ></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
