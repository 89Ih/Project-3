import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";
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
    
            const res = await axios.get(`${process.env.REACT_APP_API_URL}courses`);
    
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
  

            <div className=" d-flex flex-column " style={{ gap: 10 }}>
                <Header />
                <div className=" w-50 align-self-center align-items-center">
                    <div className=" d-flex flex-row  ">
                        <input className="form-control" type="text" placeholder="Search" value={query} onChange={(event) => { setQuery(event.target.value) }} />
                        <img onClick={sortName} src={Sort} alt={'sort'} className="css-sort" />
                        <h1>you have in your plan {courses.length} courses</h1>
                    </div>
                </div>
                <div className=" p-3 ">
                    <div className="card align-self-center align-items-center d-flex flex-wrap " style={{ width: 300, height: 275, gap: 20, background: 'white' }}>
                        {courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase())
                        ).map((course) => (<div key={course._id}>
                            <Link to={`/course/${course._id}`} ><img src={course.image} className="card-img-top" style={{ width: 300, height: 150, gap: 10 }} alt={course.title} /></Link>
                            <div className="card-body d-flex flex-column align-items-center ">
                                <h5 className="card-title ">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                                <p className="card-text">{course.price}€</p>
                               
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
  <Footer/>
      </div> );
}
 
export default Courses;