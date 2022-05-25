import React from "react";

const Review = ({ userReview }) => {
  const { name, review, rating } = userReview;
  const nonRating = 5 - rating;
  return (
    <div className="card-body items-center text-center">
      <div className="rating rating-sm pb-4">
        {[...Array(rating)].map((e, index) => (
          <input
            key={index}
            name="rating"
            className="mask mask-star bg-[#fcc032]"
          />
        ))}
        {[...Array(nonRating)].map((e, index) => (
          <input
            key={index}
            name="rating"
            className="mask mask-star bg-[rgba(255,255,255,0.6)]"
          />
        ))}
      </div>
      <p className="pb-5 lg:text-xl text-white font-serif tracking-wider">
        “ {review} ”
      </p>
      <h2 className="card-title text-white">{name}</h2>
    </div>
  );
};

export default Review;
