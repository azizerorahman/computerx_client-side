import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/Shared/NavBar";

function App() {
  return (
    <div className="lg:w-11/12 mx-auto lg:px-10 px-5">
      <NavBar></NavBar>
      <Home />
    </div>
  );
}

export default App;
