import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile = () => {
  
  const { isAuthenticated ,user, token } = useContext(SessionContext);


  return (<div>
   { isAuthenticated ?
   (<Link to={`/profile/6384b600a665cb46bd53adac`} ><img src={user?.user?.profile} alt={"name"} className="rounded-circle" style={{width:75, height:75}}/></Link>)
   :(<p>  </p>)
   }
       
  
  </div>)
};

export default Profile;
