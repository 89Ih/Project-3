import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const AddCredit = () => {
  const [credit, setCredit] = useState("");
  const navigate = useNavigate();
  const { user, token, verifyToken } = useContext(SessionContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await fetch(`${process.env.REACT_APP_API_URL}credit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ credit, id: user._id }),
    });
    const parsed = await res.json();
    console.log(parsed);
    verifyToken();
    // navigate("/courses");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" form-group d-flex">
        <input
          type="number"
          value={credit}
          placeholder="Credit Amount"
          onChange={(event) => setCredit(event.target.value)}
          className="form-control"
          style={{ border: "none" }}
        />

        <button
          type="submit"
          className="css css-rating-box"
          style={{ border: "none", width: 150 }}
        >
          Add Credit
        </button>
      </form>
    </div>
  );
};

export default AddCredit;
