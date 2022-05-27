import React from "react";
import useReviews from "../../hooks/useReview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Review from "./Review";

const Reviews = () => {
  const [reviews] = useReviews();

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

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
      <div className="bg-[rgba(30,34,40,.4)] lg:w-10/12 mx-auto bg-blend-darken pt-10 lg:px-20 bg-no-repeat bg-cover bg-center shadow-xl rounded-lg review-box pb-20">
        <Slider {...settings}>
          {reviews.map((review) => (
            <Review key={review._id} userReview={review}></Review>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
