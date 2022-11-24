// import React, { useEffect } from "react";
// import axios from "axios";

// function ProfilePage() {
//   useEffect(() => {
//     const verifyUser = async () => {
      
//         const storedToken = localStorage.getItem("authToken");
     
//         let verifyRes = await axios.get(`http://localhost:5005/auth/verify`, {
        
//         headers: { authorization: `Bearer ${storedToken}` },
//       });
//       console.log("profile page", verifyRes.data);
//     };
//     verifyUser();
//   }, []);
//   return <div>ProfilePage</div>;
// }

// export default ProfilePage;
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'

const ProfilePage =  ({ children }) => {
  
  const { isAuthenticated } = useContext(SessionContext)
    
  return  isAuthenticated ? <>{children}</> : <Navigate to='/login' />
}



export default ProfilePage
