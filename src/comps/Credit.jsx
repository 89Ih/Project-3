import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import axios from 'axios';
const Credit = () => {

const params = useParams();
const[credit,setCredit] = useState([])

useEffect(()=> {
    
    const retrieveCreditByUserId = async()=>{
        const res = await axios.get(`http://localhost:5005/auth/profile/${params.id}`);
        console.log(res.data)
        setCredit(res.data);
    }
    
    retrieveCreditByUserId()

},[params.id]); 
    return ( 
        <div>
        <p> your creadit :{credit.credit}€</p>
        </div>
     );
}
 
export default Credit;