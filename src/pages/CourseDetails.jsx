import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Rating from "../comps/Rating";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";

const CourseDetails = () => {
    const navigate = useNavigate();
    const[course,setCourse] = useState([])
    
    const params = useParams();
  
   
    useEffect(()=> {
    
        const retrieveCourseById = async()=>{
    
            const res = await axios.get(`http://localhost:5005/course/${params.id}`);
    
            console.log(res.data)

         
    
            setCourse(res.data);
        }
        
        retrieveCourseById()
    
    },[params.id]); 

    const { isAuthenticated,user, token } = useContext(SessionContext);
    
    const deleteCourse = async (event) => {
        event.preventDefault();
        const res = await axios.delete(`http://localhost:5005/course/${params.id}`, course._id);
        console.log(res.data);
        navigate("/courses");
      };
    
      const deleteRating= async (event) => {
        event.preventDefault();
        const res = await axios.delete(`http://localhost:5005/rating/${params.id}`, course._id);
        console.log(res.data);
        navigate(`/courses/${course._id}`);
      };
  
    
    
    return (<div className="App-body" >
        <div>
        <Header/>
       <div className="align-self-center align-items-center">
       <ReactPlayer url={course.video} className='w-50 h-500 rounded border'/>     
           <h2>{course.title}</h2>
           <p>{course.description}</p>
           <p>{course.price}€</p> 
                {user?.user?.role === "admin" && (
                    <p><button onClick={deleteCourse}>Delete</button></p>
                )}

       </div>
           
        </div>
        <Rating/>
        
        <Footer/>
      </div> );
}
 
export default CourseDetails;