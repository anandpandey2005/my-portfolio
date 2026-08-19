import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.js";
import Experiencepage from "./pages/Experiencepage.js";
import Projectpage from "./pages/Projectpage.js";
import Navbar from "./components/layout/Navbar/Navbar.js";
import Footer from "./components/layout/Footer/Footer.js";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    // container
    <>
      <div className="min-h-screen mx-auto overflow-hidden">
        <Navbar></Navbar>
        <div className="pt-24 min-h-screen mx-auto overflow-hidden">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/my-work" element={<Projectpage />}></Route>
            <Route path="/my-experience" element={<Experiencepage />}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
      <SpeedInsights />
    </>
  );
}

export default App;
