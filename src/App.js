import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/Shared/NavBar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <NavBar></NavBar>
      <Home />
    </div>
  );
}

export default App;
