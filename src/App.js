//imports
import { Routes, Route } from "react-router-dom";

//Page imports
import LandingPage from "./Components/LandingPage/LandingPage";
import Bridesmaids from "./Components/BridesmaidsPictures/BridesmaidsPictures";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Bridesmaids" element={<Bridesmaids />} />
      </Routes>
    </div>
  );
}

export default App;
