import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import email from "../../icons/email.svg";
import Loading from "../Shared/Loading";
import EditProfileModal from "./EditProfileModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // get user data from database
  const { data: dbUser, isLoading } = useQuery(["dbUser"], () =>
    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  const [editProfile, serEditProfile] = useState(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { _id, education, location, phone, linkedinUrl } = dbUser;

  return (
    <div>
      <h3 className="tracking-widest text-secondary text-xs uppercase mb-3 font-bold">
        My Profile
      </h3>
      <div className="flex gap-16 my-2">
        <h2 className="font-bold text-neutral lg:text-5xl text-2xl">
          {user?.displayName}
        </h2>
        <div className="flex items-center gap-5">
          <img className="h-11 w-11" src={email} alt="email" />
          <div>
            <h3 className="font-semibold lg:text-2xl text-lg  text-neutral">
              E-mail
            </h3>
            <p className="text-info lg:text-lg">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <tbody>
            <tr>
              <th className="w-56">Education</th>
              <td>Education</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>Hart Hagerty</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>Brice Swyre</td>
            </tr>
            <tr>
              <th>LinkedIn Profile Link</th>
              <td>Brice Swyre</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6 ">
        <label
          onClick={() => serEditProfile(dbUser)}
          htmlFor="edit-profile-modal"
          className="btn btn-secondary modal-button text-white"
        >
          <FontAwesomeIcon className="text-xl pr-1.5" icon={faPenToSquare} />
          Edit Info
        </label>
      </div>
      {editProfile && (
        <EditProfileModal serEditProfile={serEditProfile} dbUser={dbUser} />
      )}
    </div>
  );
};

export default MyProfile;
