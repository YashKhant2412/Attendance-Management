import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Attendance from "./Attendance";
import LandingPage from "../LandingPage";

const MainPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
          {/* <Route index element={<Home />} /> */}
        <Route path="home" element={<Home />} />
        <Route path="attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainPage;
