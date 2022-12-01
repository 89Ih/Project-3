import header from "../icons/header.png";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";
import Profile from "./profile";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, token } = useContext(SessionContext);
  const { isAuthenticated, updatedUser } = useContext(SessionContext);
  console.log("check the authti", isAuthenticated);
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid d-flex">
        <div className="w-75">
          <Link to="/">
            <img
              src={header}
              alt={"header"}
              style={{ height: 75 }}
              className="mx-2"
            />
          </Link>
          <span className="p-2 w-100   navbar-brand mb-5 h1 text-light">
            Master Course
          </span>
        </div>
        <button
          className="navbar-toggler flex-shrink-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-shrink-0 "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav " style={{ gap: 10 }}>
            <b>
              {isAuthenticated ? (
                <Link className="nav-link text-light " to="/about">
                  About us
                </Link>
              ) : null}
            </b>
            <b>
              {isAuthenticated && (
                <Link className="nav-link text-light " to="/contact">
                  Contact
                </Link>
              )}
            </b>
            <b>
              {isAuthenticated && (
                <Link className="nav-link text-light " to="/courses">
                  All courses
                </Link>
              )}
            </b>
            <b>
              {user?.user?.membership == "teacher" && (
                <Link className="nav-link text-light " to="/create">
                  Add new course
                </Link>
              )}
            </b>
            <b>
              {!isAuthenticated && (
                <Link
                  className="p-1  nav-link css rounded  text-center "
                  to="/login"
                  style={{ width: 75 }}
                >
                  Log in
                </Link>
              )}
            </b>
            <b>
              {!isAuthenticated && (
                <Link
                  className="p-1  nav-link css rounded  text-center "
                  to="/signup"
                  style={{ width: 75 }}
                >
                  Sign up
                </Link>
              )}
            </b>
            {/* <b><a className="nav-link text-light " to="javascript:history.back()">Back</a></b> */}
            <Profile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
