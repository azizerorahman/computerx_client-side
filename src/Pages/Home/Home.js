import React from "react";
import Banner from "./Banner";
import Parts from "./Parts";
import Review from "./Review";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Summary></Summary>
      <Review></Review>
    </div>
  );
};

export default Home;
