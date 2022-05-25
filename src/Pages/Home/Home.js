import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import JoinUs from "./JoinUs";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Summary></Summary>
      <JoinUs></JoinUs>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
