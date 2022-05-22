import React from "react";
import Banner from "./Banner";
import JoinUs from "./JoinUs";
import Parts from "./Parts";
import Review from "./Review";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Summary></Summary>
      <JoinUs></JoinUs>
      <Review></Review>
    </div>
  );
};

export default Home;
