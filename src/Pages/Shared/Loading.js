import React from "react";
import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className={`flex justify-center`}>
      <SpinnerDotted size={50} thickness={180} speed={100} color="#36ad47" />
    </div>
  );
};

export default Loading;
