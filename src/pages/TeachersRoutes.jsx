import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const TeachersRoutes = ({ children }) => {
  const { user, token } = useContext(SessionContext);
  console.log(user?.user?.membership);

  return user?.user?.membership == "teacher" && <>{children}</>;
};

export default TeachersRoutes;
