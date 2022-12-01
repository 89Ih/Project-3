import circle from "../icons/circle.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useState } from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  const { isAuthenticated, setIsAuthenticated, test, setTest, verifyToken } =
    useContext(SessionContext);
  const [isLoggedin, setIsLoggedin] = useState(true);

 
  const logout = () => {
    localStorage.clear();
    console.log("1");
    setIsLoggedin(false);
    console.log("2");

    console.log("3");
    setIsAuthenticated(false);
    console.log("4");
  
  };

  return (
    <footer
      className="css d-flex justify-content-end align-items-center p-1"
      style={{ gap: 5 }}
    >
      <b>
        {isAuthenticated && (
          <Link className="nav-link text-light" to="/login" onClick={logout}>
            Log out
          </Link>
        )}
      </b>
     
      {isAuthenticated ? (
        <img src={circle} alt={"circle"} className="c-success " />
      ) : (
        <img src={circle} alt={"circle"} className="c-danger" />
      )}
    </footer>
  );
};

export default Footer;
