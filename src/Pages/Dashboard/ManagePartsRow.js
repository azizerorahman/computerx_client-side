import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

const ManagePartsRow = ({ part, refetch }) => {
  const { _id, name, price, quantity } = part;

  // delete button
  const handleDeleteItem = (id, name) => {
    confirmAlert({
      message: "Are you sure you want to delete it?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // send updated data to server
            const url = `https://radiant-gorge-88164.herokuapp.com/parts/${id}`;
            fetch(url, {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  toast.success(`${name} deleted.`);
                  refetch();
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
  return (
    <tr>
      <th>{name}</th>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="text-center">
        <button
          onClick={() => handleDeleteItem(_id, name)}
          className="btn btn-accent text-white"
          variant="link"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManagePartsRow;
