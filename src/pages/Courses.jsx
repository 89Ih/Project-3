import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Sort from '../icons/sort.png';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    
    
    return (
    <div className='App-body'>
  
   
            <div className=" d-flex flex-column " style={{gap:5}}>
                <Header />
                <div className=" w-50 d-flex flex-row  align-self-center align-items-center">
                <input className="form-control" type="text" placeholder="Search" value={query} onChange={(event) => { setQuery(event.target.value) }}/>
                 
                <img onClick={sortName} src={Sort} alt={'sort'}  className="css-sort"/>
                </div>
            </div>
   
    
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

  <Footer/>
      </div> );
}
 
export default Courses;