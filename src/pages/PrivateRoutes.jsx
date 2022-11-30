import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated, user, token } = useContext(SessionContext);
  console.log("private user credit", user?.user?.credit);
  const navigate = useNavigate();

  return user?.user?.credit >= 30 ? <>{children}</> : <Navigate to="/basic" />;
};

export default PrivateRoutes;
