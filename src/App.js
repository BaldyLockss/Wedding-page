//imports
import { Routes, Route } from "react-router-dom";

//Page imports
import LandingPage from "./Components/LandingPage/LandingPage";
import Bridesmaids from "./Components/BridesmaidsPictures/BridesmaidsPictures";
import Bride from "./Components/BridePictures/Bride";
import Couple from "./Components/CouplePictures/Couple";
import Groom from "./Components/GroomPictures/Groom";
import Groomsman from "./Components/GroomsmanPictures/Groomsman";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/Bridesmaids" element={<Bridesmaids />} />
        <Route path="/Bride" element={<Bride />} />
        <Route path="/Couple" element={<Couple />} />
        <Route path="/Groom" element={<Groom />} />
        <Route path="/Groomsman" element={<Groomsman />} />
      </Routes>
    </div>
  );
}

export default App;
