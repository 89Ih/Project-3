import { useParams } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";

import "bootstrap/dist/css/bootstrap.min.css";
const Rating = () => {
    const params = useParams();
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const { user, token } = useContext(SessionContext);
    const handleSubmit = async event => {
        event.preventDefault()
        const response = await fetch(`http://localhost:5005/course/${params.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({  comment,rating, id: user._id }),
        })
        const parsed = await response.json()
        console.log(parsed)
       
      }
    //   const[rate,setRate] = useState([])
    //   useEffect(()=> {
    //     const retrieveRating = async()=>{
    //         const res = await axios.get(`http://localhost:5005/course/${params.id}`);
    //         console.log("Rating",res.data)
    //         setRate(res.data);
    //     }
    //     retrieveRating()
    // },[params.id]); 



    return ( <div>
          
<form
        onSubmit={handleSubmit}
        className="d-flex flex-column  align-self-center border border-1 w-50"
      >
        <input
         type="text"
         value={comment}
        
          placeholder="keep your comment"
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(event) => setComment(event.target.value)}
          className="form-control"
        />

        <div className="form-group p-2 w-100">
          <input
            type="number"
            value={rating}
            placeholder="rate a course"
            min="1"
            max="5"
            onChange={(event) => setRating(event.target.value)}
            className="form-control"
          />
        </div>

      
     
        <div className="form-group p-2 w-100">
          <button type="submit" className="btn w-100 css">
            Create
          </button>
        </div>
      </form>


    </div> );
}
 
export default Rating;