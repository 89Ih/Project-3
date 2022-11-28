import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import Header from "../comps/Header";
import Footer from "../comps/Footer";
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
    
   
    
    
    return (<div className="App-body" >
        <div>
        <Header/>
       <div className="align-self-center align-items-center">
       <ReactPlayer url={course.video} className='w-50 h-500 rounded border'/>     
           <h2>{course.title}</h2>
           <p>{course.description}</p>
           <p>{course.price}€</p> 
       </div>
           
        </div>
        
        
           <Footer/>
      </div> );
}
 
export default CourseDetails;