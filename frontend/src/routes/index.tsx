import axiosInit from "@/initializers/axios";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import WelcomePage from "@/pages/welcome";
import { Navigate, Route, Routes, BrowserRouter } from "react-router";

const AppRoutes = () => {
  axiosInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<RegisterPage />} />
        <Route path="/Welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
