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
    setCredit(0);
    //navigate("/courses");
  };

  return (
    <div className="App-body">
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="creditInput">
          <span>Card Number</span>
          <input
            type="text"
            maxlength="16"
            className="card-number-input"
          ></input>
        </div>
        <div className="creditInput">
          <span>Card Holder</span>
          <input type="text" maxlength="16" className="card-input"></input>
        </div>
        <div className="box">
          <div className="inputBox">
            <span>Expiration mm</span>
            <select name="" id="" className="month-input">
              <option value="month" selected disabled>
                month
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="inputBox">
            <span>Expiration yy</span>
            <select name="" id="" className="month-input">
              <option value="year" selected disabled>
                year
              </option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="inputBox">
            <span>cvv</span>
            <input type="text" maxlength="4" className="cvv-input"></input>
          </div>
        </div>
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
