import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../comps/Header";
import Footer from "../comps/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  /*   const [isLoggedin, setIsLoggedin] = useState(false); */
  const { setToken } = useContext(SessionContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await fetch("http://localhost:5005/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    let token = await res.json();

    setToken(token);
    /*   setIsLoggedin(true); */
    console.log("token", token);
    navigate("/courses");
  };

  return (
    <div className="App-body ">
      <Header />

      <form
        className="d-flex flex-column  align-self-center border border-1 w-50"
        onSubmit={handleSubmit}
      >
        <div className="form-group p-2 w-100">
          <input
            type="text"
            className="form-control"
            value={username}
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            value={password}
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group p-2 ">
          <button type="submit" className="btn w-100 css ">
            Login
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Login;
