import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";


const AddCredit = () => {
  const [credit, setCredit] = useState("");
  const navigate = useNavigate();
  const { user, token, test, setTest } = useContext(SessionContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setTest(!test);
    let res = await fetch(`${process.env.REACT_APP_URL}credit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ credit, id: user._id }),
    });
    const parsed = await res.json();
    console.log(parsed);
    // navigate("/courses");
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
    </div>
  );
};

export default AddCredit;
