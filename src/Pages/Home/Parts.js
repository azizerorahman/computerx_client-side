import React from "react";
import useParts from "../../hooks/useParts";
import Part from "./Part";

const Parts = () => {
  const [parts] = useParts([]);

  return (
    <div className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <div className="pb-8">
        <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-3 font-bold">
          Computer Parts
        </h3>
        <h2 className="mb-6 font-bold text-neutral text-center lg:text-5xl text-2xl lg:px-20">
          Check out some of our awesome products with creative ideas and great
          design.
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {parts.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
