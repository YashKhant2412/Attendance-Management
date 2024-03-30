import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Component/Home";
import Attendance from "./Pages/Component/Attendance";
import LandingPage from "./Pages/LandingPage";
import { useSelector } from "react-redux";

const App = () => {
  const gg = useSelector((data) => data?.login?.details?.isloggedIn);
  console.log(gg, "redux data");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route
          path="/attendance"
          element={gg ? <Attendance /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
