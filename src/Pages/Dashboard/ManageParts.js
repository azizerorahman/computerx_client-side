import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManagePartsRow from "./ManagePartsRow";

const ManageParts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("https://688e6942001c954b2b6e.syd.appwrite.run/parts/", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-2 lg:mb-4 font-bold">
        Manage Parts
      </h3>
      <h2 className="mb-6 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
        Delete Part if needed
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th className="text-center">Minimum Order</th>
              <th className="text-center">Price</th>
              <th className="text-center">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <ManagePartsRow
                key={part._id}
                part={part}
                refetch={refetch}
              ></ManagePartsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageParts;
