import header from "../icons/header.png";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";
import Profile from "./profile";

const Header = () => {
  const { user, token } = useContext(SessionContext);
  const { isAuthenticated } = useContext(SessionContext);
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid d-flex">
        <div className="w-75">
          <a href="/">
            <img
              src={header}
              alt={"header"}
              style={{ height: 75 }}
              className="mx-2"
            />
          </a>
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
              {isAuthenticated && (
                <a className="nav-link text-light " href="/about">
                  About us
                </a>
              )}
            </b>
            <b>
              {isAuthenticated && (
                <a className="nav-link text-light " href="/contact">
                  Contact
                </a>
              )}
            </b>
            <b>
              {isAuthenticated && (
                <a className="nav-link text-light " href="/courses">
                  All courses
                </a>
              )}
            </b>
            <b>
              {user?.user?.membership == "teacher" && (
                <a className="nav-link text-light " href="/create">
                  Add new course
                </a>
              )}
            </b>
            <b>
              {!isAuthenticated && (
                <a
                  className="p-1  nav-link css rounded  text-center "
                  href="/login"
                  style={{ width: 75 }}
                >
                  Log in
                </a>
              )}
            </b>
            <b>
              {!isAuthenticated && (
                <a
                  className="p-1  nav-link css rounded  text-center "
                  href="/signup"
                  style={{ width: 75 }}
                >
                  Sign up
                </a>
              )}
            </b>
            {/* <b><a className="nav-link text-light " href="javascript:history.back()">Back</a></b> */}
            <Profile/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
