import { useContext, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";

const TeachersRoutes = ({ children }) => {
  const { updatedUser, test, verifyToken } = useContext(SessionContext);
  useEffect(() => {
    verifyToken();
  }, [test]);

  return updatedUser?.membership === "teacher" && <>{children}</>;
};

export default TeachersRoutes;
