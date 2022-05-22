import React from "react";

const Part = ({ part }) => {
  const { name, image_url, price, description, min_order, quantity } = part;

  return (
    <div className="card rounded-lg bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt={name} />
      </figure>
      <div className="card-body items-center">
        <h3 className="card-title font-bold text-xl">{name}</h3>
        <h4 className="text-4xl font-extrabold pb-2">
          $<span className="text-secondary">{price}</span>
        </h4>
        <p className="text-center text-info">{description}</p>
        <div className="stats my-3">
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
        <div className="card-actions justify-end">
          <button className="btn btn-outline px-6 mt-3 border-2 btn-accent">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
