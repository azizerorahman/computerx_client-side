import React from "react";
import { toast } from "react-toastify";

const AddPart = () => {
  const handleAddPartButton = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const newPart = {
      name: e.target.name.value,
      image_url: e.target.url.value,
      sold: e.target.price.value,
      price: e.target.price.value,
      quantity: e.target.available.value,
      min_order: e.target.min.value,
      description: e.target.description.value,
    };

    // send data to server
    fetch("https://computerx.herokuapp.com/parts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newPart),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${name} successfully added.`);
        e.target.reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleAddPartButton}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            name="url"
            type="url"
            placeholder="Image URL"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="price"
            type="Number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            name="min"
            type="number"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            name="available"
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <button className="btn btn-secondary text-white mt-3" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddPart;
