// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./Home";
// import Attendance from "./Attendance";
// import LandingPage from "../LandingPage";

// const isAuthenticated = () => {
//   // Check if the user is authenticated
//   // For now, let's simulate it always returning true
//   return true;
// };

// // GuardedRoute component for handling authentication
// const GuardedRoute = ({ path, element }) => {
//   if (isAuthenticated()) {
//     return <Route path={path} element={element} />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// const MainPage = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         {/* <Route index element={<Home />} /> */}
//         <Route path="home" element={<Home />} />
//         <GuardedRoute path="/dashboard" element={<Attendance />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default MainPage;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Simulated authentication (replace with your actual authentication logic)
const isAuthenticated = () => {
  // Check if the user is authenticated
  // For now, let's simulate it always returning true
  return true;
};

// Custom hook for protected routes
const useRequireAuth = () => {
  return (to) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
  };
};

// Your components
const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;
const Dashboard = () => <h1>Dashboard Page</h1>;

// App component
const App = () => {
  const requireAuth = useRequireAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
