import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import AddCredit from "./AddCredit";
import { SessionContext } from "../contexts/SessionContext";

const UpdateProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [membership, setMembership] = useState("");
  const { user, verifyToken, setUser, updatedUser } =
    useContext(SessionContext);
  /* const navigate = useNavigate(); */

  console.log("the user", user);
  console.log("updated user", updatedUser);

  const params = useParams();

  const handleUpdate = async (event) => {
    event.preventDefault();

    const data = new FormData();
    const image = event.target.imageUrl.files[0];

    data.append("imageUrl", image);
    data.append("username", username);
    data.append("password", password);
    data.append("email", email);
    data.append("membership", membership);

    const res = await axios.put(
      `http://localhost:5005/auth/profile/${params.id}`,
      data
    );
    //////
  };

  /*   useEffect(() => {
    axios
      .get(`http://localhost:5005/auth/profile/${params.id}`)
      .then((response) => response.json());
  }, [UpdateProfile]); */

  useEffect(() => {
    verifyToken();
  }, [updatedUser]);

  return (
    <div className="App-body">
      <Header />
      <div>
        <AddCredit />
        <h1>
          <p> Your Credit: {updatedUser?.credit} €</p>
        </h1>
      </div>

      <form
        onSubmit={handleUpdate}
        className="d-flex flex-column  align-self-center border border-1 w-50"
      >
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

        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={username}
            placeholder=" change username"
            required
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="password"
            value={password}
            placeholder="change password"
            required
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="email"
            value={email}
            placeholder="change email"
            required
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={membership}
            placeholder="change membership"
            required
            onChange={(event) => setMembership(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group p-2 w-100">
          <button type="submit" className="btn w-100 css">
            Update
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default UpdateProfile;
