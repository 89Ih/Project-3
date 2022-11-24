import { useState } from 'react' 
import {Link } from "react-router-dom";


const CreateCourse = () => {
    const [title , setTitle ] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState(0)
    const [video , setVideo] = useState('')
    const [image , setImage] = useState('')
   



    const handleSubmit = async event => {
       
        event.preventDefault()
    
        const response = await fetch('http://localhost:5005/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description,price,video,image}),
        })
        const parsed = await response.json()
        
        console.log(parsed)
      
      }
    


    return (
        <div>

<Link  to= {`/courses`} >back</Link>
            <form onSubmit={handleSubmit}>

          
                <input type="file"  value={image}  placeholder="image"  required onChange={event => setImage(event.target.value)}  />
                
                <input type="text"      value={title}   placeholder="title" required onChange={event => setTitle(event.target.value)}  />
                
                <input type="text"  value={description}  placeholder="description"  required onChange={event => setDescription(event.target.value)}  />
                
                <input type="number"  value={price}  placeholder="Price "  required onChange={event => setPrice(event.target.value)}  />
              
                <input type="text"  value={video}  placeholder="YouTube-ID"  required onChange={event => setVideo(event.target.value)}  />
              
              
                <button type="submit">Create</button>
            </form>
        </div>
      );
}
 
export default CreateCourse;