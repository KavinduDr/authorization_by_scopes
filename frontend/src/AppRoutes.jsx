import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Layout";

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
