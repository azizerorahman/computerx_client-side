import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePart = () => {
  const { id } = useParams();

  const [part, setPart] = useState([]);
  useEffect(() => {
    const url = `https://68932db7001a18c6e02b.syd.appwrite.run/purchase/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id, part]);

  return [part, setPart];
};

export default usePart;
