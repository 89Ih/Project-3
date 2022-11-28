import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

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
    navigate("/");
  };

  return (
    <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>


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
