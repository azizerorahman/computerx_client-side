import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    fetch(`https://computerx.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <td className="font-bold text-info">{email}</td>
      <td className="text-center">
        {role === "admin" ? (
          <div className="font-bold  text-accent">Admin</div>
        ) : (
          <button
            onClick={handleMakeAdmin}
            className="btn btn-secondary btn-sm text-white"
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
