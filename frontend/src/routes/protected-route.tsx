import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.auth.user);

  const isAuthenticated = Boolean(user);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
