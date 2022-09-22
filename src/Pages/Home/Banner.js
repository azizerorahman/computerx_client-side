import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";
import bannerBottom from "../../images/banner-bottom.png";
import { motion } from "framer-motion"

const Banner = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >

      <section className="bg-[#f3f3fa]">
        <div className="hero min-h-screen pt-12 lg:w-11/12 mx-auto lg:px-10 px-5">
          <div className="hero-content flex-col-reverse lg:flex-row">
            <div className="lg:w-7/12">
              <motion.li className="item" variants={item}>
                <h1 className="lg:text-6xl text-5xl mb-4 font-bold text-neutral">
                  Start your dream Business with
                  <span className="text-accent"> Us today</span>
                </h1>
                <p className="pt-6 pb-9 lg:text-2xl text-xl font-medium text-info">
                  We are a computer parts manufacturer. Buy our quality products and
                  grow your business.
                </p>
                <button className="btn btn-accent mr-3.5 text-white btn-md lg:btn-lg">
                  <Link to="/sign-up">Get Started</Link>
                </button>
                <button className="btn btn-outline border-2 btn-secondary btn-md lg:btn-lg">
                  <Link to="/log-in">Log In</Link>
                </button>
              </motion.li>
            </div>
            <div className="lg:w-2/4">
              <motion.li className="item" variants={item}>
                <img src={banner} alt="banner" className="lg:w-96 w-full m-auto" />
              </motion.li>
            </div>
          </div>
        </div>
        <motion.li className="item" variants={item}>
          <figure>
            <img src={bannerBottom} alt="banner-bottom" />
          </figure>
        </motion.li>
      </section>
    </motion.ul>
  );
};

export default Banner;
