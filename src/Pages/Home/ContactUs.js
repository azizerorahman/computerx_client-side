import React from "react";
import contactUs from "../../images/contact_us.png";
import pin from "../../icons/pin.svg";
import phone from "../../icons/phone.svg";
import email from "../../icons/email.svg";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-5/12">
          <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
            Contact Us
          </h3>
          <h2 className="mb-10 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
            Got any questions? Don't hesitate to get in touch.
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <img className="h-11 w-11" src={pin} alt="pin" />
              <div>
                <h3 className="font-semibold text-2xl text-neutral">Address</h3>
                <p className="text-info text-lg">
                  Moonshine St. 14/05 Light City, London
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img className="h-11 w-11" src={phone} alt="phone" />
              <div>
                <h3 className="font-semibold text-2xl text-neutral">Phone</h3>
                <p className="text-info text-lg">00 (123) 456 78 90</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img className="h-11 w-11" src={email} alt="email" />
              <div>
                <h3 className="font-semibold text-2xl text-neutral">E-mail</h3>
                <p className="text-info text-lg">admin@computerx.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12">
          <img src={contactUs} alt="join_us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
