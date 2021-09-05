import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts";

export const PrivateRoute = ({ path, ...props }) => {
  const { isUserLogin } = useAuth();
  return isUserLogin ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} to="/login" replace />
  );
};
