import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const PrivateRoutes = ({ children }) => {
  const { user, token } = useContext(SessionContext);

  return user ? <>{children}</> : Navigate("/login");
};

export default PrivateRoutes;
