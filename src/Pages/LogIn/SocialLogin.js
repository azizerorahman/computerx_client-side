import React from "react";
import { BsGoogle } from "react-icons/bs";

const SocialLogin = ({ signInWithGoogle, googleError }) => {
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="border-2 btn btn-outline btn-secondary w-full"
      >
        <BsGoogle className="text-2xl mr-1"></BsGoogle>Google
      </button>
      <label className="flex justify-center">
        {googleError && (
          <span className="pt-2 label-text-alt text-error">
            {googleError.message
              .substring(22)
              .replace(/[()']+/g, "")
              .replace(/[-']+/g, " ")
              .charAt(0)
              .toUpperCase() +
              googleError.message
                .substring(22)
                .replace(/[()']+/g, "")
                .replace(/[-']+/g, " ")
                .slice(1)}
          </span>
        )}
      </label>
    </div>
  );
};

export default SocialLogin;
