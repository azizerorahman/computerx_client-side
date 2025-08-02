import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import OrderFrom from "./OrderFrom";

const Purchase = () => {
  const { id } = useParams();

  const {
    data: part,
    isLoading,
    refetch,
  } = useQuery(["part"], () =>
    fetch(`https://688e6942001c954b2b6e.syd.appwrite.run/purchase/${id}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { name, image_url, min_order, quantity, description } = part;

  return (
    <div className="hero min-h-screen lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <div className="hero-content flex-col lg:flex-row w-full gap-6">
        <div className="lg:w-6/12 lg:pt-0 pt-10 items-center flex flex-col">
          <img src={image_url} alt="product" />
          <div className="stats">
            <div className="stat pl-0">
              <div className="stat-title">Minimum Order</div>
              <div className="stat-value text-secondary text-center">
                {min_order}
              </div>
            </div>
            <div className="stat pr-0">
              <div className="stat-title">Available Stock</div>
              <div className="stat-value text-primary text-center">
                {quantity}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12">
          <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
            Confirm Order
          </h3>
          <h2 className="mb-4 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
            {name}
          </h2>
          <p className="mb-3 text-info">{description}</p>
          <OrderFrom part={part} refetch={refetch}></OrderFrom>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
