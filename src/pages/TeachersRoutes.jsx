import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const TeachersRoutes = ({ children }) => {
  const { user, token, updatedUser, test, verifyToken } =
    useContext(SessionContext);
  useEffect(() => {
    verifyToken();
  }, [test]);

  return updatedUser?.membership == "teacher" && <>{children}</>;
};

export default TeachersRoutes;
