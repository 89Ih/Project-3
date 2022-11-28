import circle from "../icons/circle.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useState } from "react";

const Footer = () => {
  const { isAuthenticated, token } = useContext(SessionContext);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logout = () => {
    localStorage.clear();
    setIsLoggedin(false);
  };
  return (
    <footer
      className="css d-flex justify-content-end align-items-center p-1"
      style={{ gap: 5 }}
    >
      <b>
        <a className="nav-link text-light  " href="/login" onClick={logout}>
          LOGOUT
        </a>
      </b>

      {isAuthenticated ? (
        <img src={circle} alt={"circle"} className="c-success   " />
      ) : (
        <img src={circle} alt={"circle"} className="c-danger" />
      )}
    </footer>
  );
};

export default Footer;
