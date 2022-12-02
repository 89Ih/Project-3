import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Rating from "../comps/Rating";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import deleteIcon from "../icons/delete.png";
const CourseDetails = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

  const params = useParams();

  useEffect(() => {
    const retrieveCourseById = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}course/${params.id}`
      );

      console.log(res.data);

      setCourse(res.data);
    };

    retrieveCourseById();
  }, [params.id]);

  const { user } = useContext(SessionContext);

  const deleteCourse = async (event) => {
    event.preventDefault();
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}course/${params.id}`,
      course._id
    );
    console.log(res.data);
    navigate("/courses");
  };

  return (
    <div className="App-body">
      <div >
        <Header />
   
      </div>

      <div className=" d-flex flex-column align-self-center align-items-center rounded border p-1 ">
   
        <ReactPlayer url={course.video} className="w-75" />
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      
       
       
        <Rating />
      </div>

      <div>
      {user?.user?.role === "admin" && (
          <img src={deleteIcon} alt={"name"} onClick={deleteCourse} className="mx-2"/>
          
        )}
          <Footer />
      </div>

    
    </div>
  );
};

export default CourseDetails;
