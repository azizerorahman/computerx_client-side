import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://68932db7001a18c6e02b.syd.appwrite.run/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return [parts, setParts];
};

export default useParts;
