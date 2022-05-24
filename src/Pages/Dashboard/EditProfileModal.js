import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditProfileModal = ({ serEditProfile, dbUser, refetch }) => {
  const { _id, education, location, phone, linkedinUrl } = dbUser;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      education: data.education,
      location: data.location,
      phone: data.phone,
      linkedinUrl: data.linkedinUrl,
    };
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.modifiedCount === 1) {
          refetch();
          toast.success("Successfully Updated!");
          serEditProfile(null);
        } else {
          toast.error("Change Information to Update");
        }
      });
  };

  const [newEducation, setNewEducation] = useState(education);
  const [newLocation, setNewLocation] = useState(location);
  const [newPhone, setNewPhone] = useState(phone);
  const [newLinkedinUrl, setNewLinkedinUrl] = useState(linkedinUrl);

  return (
    <div>
      <input type="checkbox" id="edit-profile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            onClick={() => serEditProfile(null)}
            className="btn btn-sm btn-ghost text-2xl absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>
          <h3 className="tracking-widest text-secondary mt-3 text-xs uppercase mb-1 font-bold">
            Edit Information
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Education</span>
              </label>
              <input
                value={newEducation}
                type="text"
                placeholder="Grade or University"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("education", {
                  onChange: (e) => {
                    setNewEducation(e.target.value);
                  },
                })}
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Location</span>
              </label>
              <input
                value={newLocation}
                type="text"
                placeholder="City Name"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("location", {
                  onChange: (e) => {
                    setNewLocation(e.target.value);
                  },
                })}
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Phone</span>
              </label>
              <input
                value={newPhone}
                type="text"
                placeholder="001234567890"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("phone", {
                  pattern: {
                    value: /^\+?(0|[0-9]\d*)$/,
                    message:
                      "*Please enter a valid phone number without space or dash",
                  },
                  onChange: (e) => {
                    setNewPhone(e.target.value);
                  },
                })}
              />
              <label className="label py-0">
                {errors.phone && (
                  <span className="label-text-alt text-error pt-1">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">LinkedIn Profile Link</span>
              </label>
              <input
                value={newLinkedinUrl}
                type="text"
                placeholder="linkedin.com/in/username"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("linkedinUrl", {
                  pattern: {
                    value:
                      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                    message: "*Please enter a valid link",
                  },
                  onChange: (e) => {
                    setNewLinkedinUrl(e.target.value);
                  },
                })}
              />
              <label className="label py-0">
                {errors.linkedinUrl && (
                  <span className="label-text-alt text-error pt-1">
                    {errors.linkedinUrl.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-accent text-white"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
