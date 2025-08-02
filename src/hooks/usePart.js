import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePart = () => {
  const { id } = useParams();

  const [part, setPart] = useState([]);
  useEffect(() => {
    const url = `https://688e6942001c954b2b6e.syd.appwrite.run/purchase/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id, part]);

  return [part, setPart];
};

export default usePart;
