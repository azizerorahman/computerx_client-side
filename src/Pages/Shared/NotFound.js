import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/not_found.png";

const NotFound = () => {
  return (
    <div className="py-12">
      <img className="lg:w-8/12 m-auto" src={notFound} alt="not found" />
      <div className="flex justify-center">
        <button className="btn btn-outline border-2 btn-secondary btn-md lg:btn-lg">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
