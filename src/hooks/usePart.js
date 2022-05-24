import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePart = () => {
  const { id } = useParams();

  const [part, setPart] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);

  return [part, setPart];
};

export default usePart;
