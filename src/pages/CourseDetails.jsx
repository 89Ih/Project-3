import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'

const CourseDetails = () => {
   
    const[course,setCourse] = useState([])
    
    const params = useParams();
    // let [youtubeID] = useState('')
   
    useEffect(()=> {
    
        const retrieveCourseById = async()=>{
    
            const res = await axios.get(`http://localhost:5005/course/${params.id}`);
    
            console.log(res.data)

         
    
            setCourse(res.data);
        }
        
        retrieveCourseById()
    
    },[params.id]); 
    
   
    
    
    return (<div >
  
    <label ><h1>Course-Details</h1></label>
    <Link  to= {`/courses`} >back</Link>
           <ReactPlayer url={course.video} />     
           <h2>{course.title}</h2>
           <p>{course.description}</p>
           <p>{course.price}€</p> 
        
 
      </div> );
}
 
export default CourseDetails;