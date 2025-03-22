import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PlatinumPage from "./pages/PlatinumPage";
import GoldPage from "./pages/GoldPage";
import SilverPage from "./pages/SilverPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/platinum" element={<PlatinumPage />} />
        <Route path="/gold" element={<GoldPage />} />
        <Route path="/silver" element={<SilverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
