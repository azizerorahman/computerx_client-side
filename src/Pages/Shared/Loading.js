import React from "react";
import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SpinnerDotted size={50} thickness={150} speed={50} color="#CC52BE" />
    </div>
  );
};

export default Loading;
