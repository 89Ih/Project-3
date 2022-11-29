import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile = () => {
  
  const { isAuthenticated ,user, token } = useContext(SessionContext);
console.log()

  return (<div>
   { isAuthenticated ?
   (<Link to={`/profile/${user?.user?._id}`} ><img src={user?.user?.profile} alt={"name"} className="rounded-circle" style={{width:75, height:75}}/></Link>)
   :
   (<p></p>)
   }
       
  
  </div>)
};

export default Profile;
