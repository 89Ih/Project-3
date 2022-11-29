import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(SessionContext);

  return isAuthenticated ? <>{children}</> : Navigate("/login");
};

export default PrivateRoutes;
