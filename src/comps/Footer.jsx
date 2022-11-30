import circle from "../icons/circle.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Footer = () => {
  const { isAuthenticated, token } = useContext(SessionContext);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    
    localStorage.clear();
    setIsLoggedin(false);
    navigate("/login");
  
  };
  return (
    <footer
      className="css d-flex justify-content-end align-items-center p-1"
      style={{ gap: 5 }}
    >
      <b>
        {isAuthenticated && (
  
          <button className="nav-link text-light" onClick={logout}>Log out</button>
        )}
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
