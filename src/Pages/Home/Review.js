import React from "react";
import "./Home.css";

const Review = () => {
  return (
    <section className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <div className="pb-7">
        <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-3 font-bold">
          Happy Customers
        </h3>
        <h2 className="mb-6 font-bold text-neutral text-center lg:text-5xl text-xl lg:px-20">
          Don't take our word for it. See what customers are saying about us.
        </h2>
      </div>
      <div className="bg-[rgba(30,34,40,.4)] w-10/12 mx-auto bg-blend-darken h-80 py-10 px-20 bg-no-repeat bg-cover bg-center shadow-xl rounded-lg review-box">
        <div class="card-body items-center text-center">
          <div class="rating rating-sm pb-4">
            <input name="rating" class="mask mask-star bg-[#fcc032]" />
            <input name="rating" class="mask mask-star bg-[#fcc032]" />
            <input name="rating" class="mask mask-star bg-[#fcc032]" />
            <input name="rating" class="mask mask-star bg-[#fcc032]" />
            <input name="rating" class="mask mask-star bg-[#fcc032]" />
            <input
              name="rating"
              class="mask mask-star bg-[rgba(255,255,255,0.6)]"
            />
          </div>
          <p className="pb-5 text-xl text-white">
            “Vivamus sagittis lacus augue laoreet rutrum faucibus auctor
            vestibulum ligula porta felis, euismod semper cras justo odio
            consectetur.”
          </p>
          <h2 class="card-title text-white">Coriss Ambady</h2>
        </div>
      </div>
    </section>
  );
};

export default Review;
