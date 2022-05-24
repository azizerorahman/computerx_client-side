import React, { useState } from "react";

const Abc = ({ min_order }) => {
  const [amount, setAmount] = useState(min_order);
  console.log(amount);
  return (
    <div>
      <div class="form-control">
        <label className="label p-0">
          <span className="label-text">Enter Amount</span>
        </label>
        <div class="input-group">
          <button class="btn btn-square text-3xl pb-1.5 text-white">-</button>
          <input
            type="text"
            placeholder="Search…"
            value={amount}
            class="input input-bordered focus:outline-offset-0 w-full"
          />
          <button class="btn btn-square text-3xl pb-1.5 text-white">+</button>
        </div>
      </div>
    </div>
  );
};

export default Abc;
