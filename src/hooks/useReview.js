import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://68932db7001a18c6e02b.syd.appwrite.run/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};

export default useReviews;
