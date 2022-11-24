import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const Courses = () => {
   
    const[courses,setCourses] = useState([])
    const[query,setQuery] = useState("")
   
    useEffect(()=> {
    
        const retrieveCourses = async()=>{
    
            const res = await axios.get('http://localhost:5005/courses');
    
            console.log(res.data)
    
            setCourses(res.data);
        }
        
        retrieveCourses()
    },[]); 
    
    const sortName = () => {
        
        const courseSorted = Array.from(courses).sort((a, b) =>a.title.localeCompare(b.title)); 
        
        setCourses(courseSorted);
      };
    
    
    return (<div className='newBeer'>
  
    <label ><h1>All Courses</h1></label>
    
    <input type="text" value={query} onChange={(event)=>{setQuery(event.target.value)}} placeholder="Search" />
    <button  onClick={sortName}>A-z</button>
    
    <div >
        
        {courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((course)=>(<div key={course._id}>
           
          <Link  to= {`/course/${course._id}`} ><img src={course.image} width={50} alt={course.title}/></Link>
           
           <h2>{course.title}</h2>
           <p>{course.description}</p>
           <p>{course.price}</p> 
          
        </div>
        
        ))
            
        }
  
  </div>
      </div> );
}
 
export default Courses;