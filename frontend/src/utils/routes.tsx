import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import ProfilePage from "../pages/profile/ProfilePage";
import { ProtectedRoute } from "@asgardeo/react-router";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              redirectTo="/login"
              loader={<div className="spinner">Loading...</div>}
            >
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<div style={{ padding: 24 }}>404 — Page not found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
