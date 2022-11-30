import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import Header from "../comps/Header";
import Footer from "../comps/Footer";

const AddCredit = () => {
  const [credit, setCredit] = useState("");
  const navigate = useNavigate();
  const { user, token } = useContext(SessionContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await fetch("http://localhost:5005/credit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ credit, id: user._id }),
    });
    const parsed = await res.json();
    console.log(parsed);
    navigate("/courses");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={credit}
          placeholder="Credit Amount"
          onChange={(event) => setCredit(event.target.value)}
        />

        <button type="submit">Add Credit</button>
      </form>

      <Footer />
    </div>
  );
};

export default AddCredit;
