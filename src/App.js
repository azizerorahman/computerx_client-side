import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Footer from "./Pages/Shared/Footer";
import NavBar from "./Pages/Shared/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
