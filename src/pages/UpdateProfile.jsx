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
  const { user, verifyToken, test, updatedUser, setTest } =
    useContext(SessionContext);

  /* const navigate = useNavigate(); */

  console.log("the user", user);
  console.log("updated user", updatedUser);

  const params = useParams();

  const handleUpdate = async (event) => {
    event.preventDefault();
    setTest(!test);
    const data = new FormData();
    const image = event.target.imageUrl.files[0];

    data.append("imageUrl", image);
    data.append("username", username);
    data.append("password", password);
    data.append("email", email);
    data.append("membership", membership);

    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}auth/profile/${params.id}`,
      data
    );
    //////
    verifyToken();
  };

  useEffect(() => {
    verifyToken();
  }, [test]);

  return (
    <div className="App-body">
      <Header />
     
      <div className=" d-flex flex-column align-self-center align-items-center w-75 ">
      <div className=" p-2 w-50 align-self-center align-items-center rounded border" >
          <div className="card-title d-flex flex-row rounded border  bg-white  ">
            <p className="card-text flex-grow-1 m-2">
              Your Credit: {updatedUser?.credit} €
            </p>
            <AddCredit />
          </div>
        </div>
      <form
        style={{ border: "none" }}
        onSubmit={handleUpdate}
        className="d-flex flex-column  align-self-center border border-1 w-50 "
        
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
            placeholder="Change email"
            required
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
            defaultValue="Change email"
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
          <button type="submit" className="css-button w-100">
            Update
          </button>
        </div>
      </form>
      </div>
  
      <Footer />
    </div>
  );
};

export default UpdateProfile;
