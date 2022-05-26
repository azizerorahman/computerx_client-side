import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile lg:w-11/12 mx-auto lg:px-10 lg:py-5">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col relative lg:pt-4 pt-20 lg:pl-3 px-7 lg:px-0">
        <Outlet />
        <label
          htmlFor="drawer"
          className="btn drawer-button btn-ghost lg:hidden absolute top-3 left-2 text-3xl"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content lg:bg-inherit">
          <li>
            <Link className="font-semibold" to="/dashboard">
              My Profile
            </Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link className="font-semibold" to="/dashboard/add-review">
                  Add a Review
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/dashboard/my-orders">
                  My Orders
                </Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <Link className="font-semibold" to="/dashboard/manage-orders">
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/dashboard/add-part">
                  Add New Part
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/dashboard/manage-part">
                  Manage Parts
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/dashboard/make-admin">
                  Make Admin
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
