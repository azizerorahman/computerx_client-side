import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import "./LogIn.css";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { Info, Wifi, X, UserCircle, ShieldCheck } from "lucide-react";

const LogIn = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isChina, setIsChina] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [showChinaToast, setShowChinaToast] = useState(false);
  const iconRef = useRef(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || googleUser);

  // Demo credentials
  const demoCredentials = {
    user: {
      email: "user@mail.com",
      password: "User123!",
    },
    admin: {
      email: "admin@mail.com",
      password: "Admin123!",
    },
  };

  // Function to fill form with demo credentials
  const fillDemoCredentials = (role) => {
    setValue("email", demoCredentials[role].email);
    setValue("password", demoCredentials[role].password);
  };

  // Check user's location
  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        if (data.country_code === "CN") {
          setIsChina(true);
          // Show toast after a small delay
          setTimeout(() => {
            setShowChinaToast(true);
          }, 1000);
        }
      } catch (error) {
        console.log("Location check failed:", error);
      } finally {
        setLocationChecked(true);
      }
    };

    checkLocation();
  }, []);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 10,
        left: rect.left + rect.width / 2,
      });
    }
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const dismissToast = () => {
    setShowChinaToast(false);
  };

  if (loading || googleLoading || !locationChecked) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="bg-[#f3f3fa] flex items-center justify-center lg:py-20">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5 mb-16 lg:m-0 relative">
        {/* Info Icon in Top Right Corner - Only show if not in China */}
        {!isChina && (
          <div className="absolute top-4 right-4">
            <Info
              ref={iconRef}
              size={18}
              className="text-info cursor-help opacity-60 hover:opacity-100 transition-opacity"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )}

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

          {/* Demo Login Buttons */}
          <div className="flex justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => fillDemoCredentials("user")}
              className="btn btn-sm btn-outline btn-info flex items-center gap-1"
            >
              <UserCircle size={16} />
              Demo User
            </button>
            <button
              type="button"
              onClick={() => fillDemoCredentials("admin")}
              className="btn btn-sm btn-outline btn-secondary flex items-center gap-1"
            >
              <ShieldCheck size={16} />
              Demo Admin
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="email"
                placeholder=" &#xf0e0;  Email Address"
                className="input input-bordered input-icon text-base mb-1"
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
              <label className="label pt-0">
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
                })}
              />
              <label className="label pt-0">
                {errors.password?.type === "required" && (
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

          {/* Demo Credentials Info */}
          <div className="text-xs text-center text-gray-500 mt-2">
            <p>Click a demo button above to auto-fill credentials</p>
          </div>

          <div className="divider">OR</div>
          <SocialLogin
            signInWithGoogle={signInWithGoogle}
            googleError={googleError}
          ></SocialLogin>
        </div>
      </div>

      {/* Custom Toast Notification for China Users */}
      {showChinaToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white border-l-4 border-orange-400 rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Wifi className="h-4 w-4 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Connection Notice
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    Authentication is Firebase/Google-based and requires a VPN
                    connection in your region.
                  </div>
                </div>
              </div>
              <button
                onClick={dismissToast}
                className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip for non-China users */}
      {!isChina && showTooltip && (
        <div
          className="fixed px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
          }}
        >
          Firebase/Google-based Authentication: May have connectivity issues in
          China
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
