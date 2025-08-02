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
  const {
    data: dbUser,
    isLoading,
    refetch,
  } = useQuery(["dbUser"], () =>
    fetch(`https://688e6942001c954b2b6e.syd.appwrite.run/user/${user.email}`, {
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

  const [editProfile, setEditProfile] = useState(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { _id, education, location, phone, linkedinUrl } = dbUser;

  return (
    <div>
      <h3 className="tracking-widest text-secondary text-xs uppercase mb-3 font-bold">
        My Profile
      </h3>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-20 my-2">
        <h2 className="font-bold text-neutral lg:text-5xl text-3xl">
          {user?.displayName}
        </h2>
        <div className="flex items-center lg:gap-5 gap-4">
          <img className="h-11 w-11" src={email} alt="email" />
          <div>
            <h3 className="font-semibold lg:text-2xl text-base text-neutral">
              E-mail
            </h3>
            <p className="text-info text-sm lg:text-lg">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table lg:w-10/12">
          <tbody>
            <tr>
              <th className="lg:w-80">Education</th>
              <td>{education}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{location}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{phone}</td>
            </tr>
            <tr>
              <th>LinkedIn Profile Link</th>
              <td>{linkedinUrl}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6 w-10/12 mb-6">
        <label
          onClick={() => setEditProfile(_id)}
          htmlFor="edit-profile-modal"
          className="btn btn-secondary modal-button text-white"
        >
          <FontAwesomeIcon className="text-xl pr-1.5" icon={faPenToSquare} />
          Edit Info
        </label>
      </div>
      {editProfile && (
        <EditProfileModal
          setEditProfile={setEditProfile}
          dbUser={dbUser}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MyProfile;
