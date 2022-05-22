import React from "react";
import joinUs from "../../images/join_us.png";
import bannerBottom from "../../images/banner-bottom.png";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="bg-[#f3f3fa]">
      <div className="hero min-h-screen lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
        <div className="hero-content flex-col gap-16 lg:flex-row">
          <div className="lg:w-7/12">
            <img src={joinUs} alt="join_us" />
          </div>
          <div className="lg:w-4/12">
            <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
              Join With Us
            </h3>
            <h2 className="mb-6 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
              Let's make something great together.
            </h2>
            <p className="pb-6 lg:text-lg text-center lg:text-left font-medium text-info">
              We are focused on establishing long-term relationships with
              customers. Sign up for free and be a part of us.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="btn lg:px-6 px-5 text-white btn-accent">
                <Link to="/sign-up">Join Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <img src={bannerBottom} alt="banner-bottom" />
      </figure>
    </div>
  );
};

export default JoinUs;
