import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Stars from "./Stars";
const Rating = () => {
  const params = useParams();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const { user, token } = useContext(SessionContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}course/${params.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ comment, rating, id: user._id }),
      }
    );
    const parsed = await response.json();
    console.log(parsed);
  };
  const [rate, setRate] = useState({});
  useEffect(() => {
    const retrieveRating = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}rating/${params.id}`
      );
      console.log("Rating", res.data);
      setRate(res.data);
    };
    retrieveRating();
  }, [params.id]);

  const navigate = useNavigate();
  const deleteRating = async (event) => {
    event.preventDefault();
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}rating/${params.id}`,
      params.id
    );
    console.log(res.data);
    // navigate(`/courses/${course._id}`);
  };

  return (
    <div>
      <div className="p-2" style={{ width: 700 }}>
        <div className="card-body d-flex flex-column m-3" style={{ gap: 10 }}>
          {/* {rate.rate?.comment === null && rate.rate?.rating === null? (
        <div className="card-title d-flex flex-row rounded border  bg-white " >
        <p className="card-text flex-grow-1 m-2">{rate.rate?.comment} </p>
        <p className="card-text mx-4 m-2"><Stars>{rate.rate?.rating}</Stars></p>
        <button onClick={deleteRating} className=" css css-rating-box" style={{ border: "none" }}>Delete</button>
        </div>
      ) : (
       <p></p>
      )} */}
          <div className="card-title d-flex flex-row rounded border  bg-white ">
            <p className="card-text flex-grow-1 m-2">{rate.rate?.comment} </p>
            <p className="card-text mx-4 m-2">
              <Stars>{rate.rate?.rating}</Stars>
            </p>
            <button
              onClick={deleteRating}
              className=" css css-rating-box"
              style={{ border: "none" }}
            >
              Delete
            </button>
          </div>

          <form onSubmit={handleSubmit} className="">
            <div className="form-group  d-flex rounded border  ">
              <input
                type="text"
                value={comment}
                placeholder="keep your comment"
                aria-label=""
                aria-describedby="basic-addon1"
                onChange={(event) => setComment(event.target.value)}
                className="form-control"
                style={{ border: "none" }}
              />
              <input
                type="number"
                value={rating}
                placeholder="rate a course"
                min="1"
                max="5"
                onChange={(event) => setRating(event.target.value)}
                style={{ border: "none" }}
              />
              <button
                type="submit"
                className=" css css-rating-box"
                style={{ border: "none" }}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rating;
