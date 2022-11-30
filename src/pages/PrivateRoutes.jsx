import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated, user, token, updatedUser, verifyToken, test } =
    useContext(SessionContext);
  console.log("updated user credit", updatedUser.credit);
  const navigate = useNavigate();
  useEffect(() => {
    verifyToken();
  }, [test]);

  return updatedUser && updatedUser.credit >= 30 ? (
    <>{children}</>
  ) : (
    <Navigate to="/basic" />
  );
};

export default PrivateRoutes;
