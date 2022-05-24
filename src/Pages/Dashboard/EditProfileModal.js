import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditProfileModal = ({ serEditProfile, id }) => {
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
    fetch(`http://localhost:5000/update/${id}`, {
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
          toast.success("Successfully Updated!");
          serEditProfile(null);
        } else {
          toast.error("Change Information to Update");
        }
      });
  };

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
                type="text"
                placeholder="Grade or University"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("education")}
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="City Name"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("location")}
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="001234567890"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("phone", {
                  pattern: {
                    value: /^\+?(0|[0-9]\d*)$/,
                    message:
                      "*Please enter a valid phone number without space or dash",
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
                type="text"
                placeholder="linkedin.com/in/username"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("linkedinUrl", {
                  pattern: {
                    value:
                      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                    message: "*Please enter a valid link",
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
