import React from "react";
import "./Home.css";

const Review = () => {
  return (
    <section className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <div className="pb-7">
        <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-3 font-bold">
          Happy Clients
        </h3>
        <h2 className="mb-6 font-bold text-neutral text-center lg:text-5xl text-2xl lg:px-20">
          Don't take our word for it. See what customers are saying about us.
        </h2>
      </div>
      <div className="bg-[rgba(30,34,40,.4)] lg:w-10/12 mx-auto bg-blend-darken py-10 lg:px-20 bg-no-repeat bg-cover bg-center shadow-xl rounded-lg review-box">
        <div className="card-body items-center text-center">
          <div className="rating rating-sm pb-4">
            <input name="rating" className="mask mask-star bg-[#fcc032]" />
            <input name="rating" className="mask mask-star bg-[#fcc032]" />
            <input name="rating" className="mask mask-star bg-[#fcc032]" />
            <input name="rating" className="mask mask-star bg-[#fcc032]" />
            <input name="rating" className="mask mask-star bg-[#fcc032]" />
            <input
              name="rating"
              className="mask mask-star bg-[rgba(255,255,255,0.6)]"
            />
          </div>
          <p className="pb-5 lg:text-xl text-white font-serif tracking-wider">
            “ Vivamus sagittis lacus augue laoreet rutrum faucibus auctor
            vestibulum ligula porta felis, euismod semper cras justo odio
            consectetur. ”
          </p>
          <h2 className="card-title text-white">Coriss Ambady</h2>
        </div>
      </div>
    </section>
  );
};

export default Review;
