import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddPart from "./Pages/Dashboard/AddPart";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageParts from "./Pages/Dashboard/ManageParts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import RequireAdmin from "./Pages/LogIn/RequireAdmin";
import RequireUser from "./Pages/LogIn/RequireUser";
import RequireAuth from "./Pages/LogIn/RequireAuth";
import SignUp from "./Pages/LogIn/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import NavBar from "./Pages/Shared/NavBar";
import NotFound from "./Pages/Shared/NotFound";
import Loading from "./Pages/Shared/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://688e6942001c954b2b6e.syd.appwrite.run/").then(() =>
      setLoading(false)
    );
  }, []);

  // loading spinner
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route
            path="/dashboard/add-review"
            element={
              <RequireUser>
                <AddReview />
              </RequireUser>
            }
          ></Route>
          <Route
            path="/dashboard/my-orders"
            element={
              <RequireUser>
                <MyOrders />
              </RequireUser>
            }
          ></Route>
          <Route path="/dashboard/payment/:id" element={<Payment />}></Route>
          <Route
            path="/dashboard/make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manage-orders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/add-part"
            element={
              <RequireAdmin>
                <AddPart />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manage-part"
            element={
              <RequireAdmin>
                <ManageParts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
