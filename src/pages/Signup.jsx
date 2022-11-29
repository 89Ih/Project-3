import Header from "../comps/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../comps/Footer";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [membership, setMembership] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    const profile = event.target.imageUrl.files[0];
    data.append("imageUrl", profile);
    data.append("username", username);
    data.append("password", password);
    data.append("email", email);
    data.append("membership", membership);

    const res = await axios.post("http://localhost:5005/auth/signup", data);

    console.log(res.data);
    navigate("/login");
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
            id="img"
            type="file"
            name="imageUrl"
            accept="image/png, image/jpg"
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          />
        </div>
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
        <div className="form-group p-2 w-100">
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="form-control"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={membership}
            placeholder="Membership"
            className="form-control"
            required
            onChange={(event) => setMembership(event.target.value)}
          />
        </div>
        {/* <label for="me">Membership:</label>
                <select name="Membership" id="me" onChange={event => setMembership(event.target.value)}>
                <option value={membership}>Teacher</option>
                <option value={membership}>Student</option>
                </select> */}

        <div className="form-group p-2 ">
          <button className="btn w-100 css " type="submit">
            Signup
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;
