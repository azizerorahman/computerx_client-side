import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen pt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-2/4">
          <img src={banner} alt="banner" className="w-96 ls:w-full" />
        </div>
        <div className="lg:w-7/12">
          <h1 className="text-6xl mb-4 font-bold text-neutral">
            Start your dream Business with
            <span className="text-accent"> Us today</span>
          </h1>
          <p className="pt-6 pb-9 text-2xl font-medium text-info">
            We are a computer parts manufacturer. Buy our quality products and
            grow your business.
          </p>
          <button className="btn btn-accent mr-3.5 text-white btn-md lg:btn-lg">
            Get Started
          </button>
          <button className="btn btn-outline border-2 btn-secondary text-white btn-md lg:btn-lg">
            <Link to="/log-in">Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
