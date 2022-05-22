import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";
import bannerBottom from "../../images/banner-bottom.png";

const Banner = () => {
  return (
    <section className="bg-[#f3f3fa]">
      <div className="hero min-h-screen pt-12 lg:w-11/12 mx-auto lg:px-10 px-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-2/4">
            <img src={banner} alt="banner" className="lg:w-96 w-full m-auto" />
          </div>
          <div className="lg:w-7/12">
            <h1 className="lg:text-6xl text-5xl mb-4 font-bold text-neutral">
              Start your dream Business with
              <span className="text-accent"> Us today</span>
            </h1>
            <p className="pt-6 pb-9 lg:text-2xl text-xl font-medium text-info">
              We are a computer parts manufacturer. Buy our quality products and
              grow your business.
            </p>
            <button className="btn btn-accent mr-3.5 text-white btn-md lg:btn-lg">
              Get Started
            </button>
            <button className="btn btn-outline border-2 btn-secondary btn-md lg:btn-lg">
              <Link to="/log-in">Log In</Link>
            </button>
          </div>
        </div>
      </div>
      <figure>
        <img src={bannerBottom} alt="banner-bottom" />
      </figure>
    </section>
  );
};

export default Banner;
