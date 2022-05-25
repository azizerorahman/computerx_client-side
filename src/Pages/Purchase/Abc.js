import React from "react";

const Abc = ({ min_order }) => {
  // const [amount, setAmount] = useState(min_order);
  // console.log(amount);
  return (
    <div>
      <div className="form-control">
        <label className="label p-0">
          <span className="label-text">Enter Amount</span>
        </label>
        <div className="input-group">
          <button className="btn btn-square text-3xl pb-1.5 text-white">
            -
          </button>
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered focus:outline-offset-0 w-full"
          />
          <button className="btn btn-square text-3xl pb-1.5 text-white">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abc;
