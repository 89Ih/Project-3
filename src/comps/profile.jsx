import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionContext } from "../contexts/SessionContext";
import { Link } from "react-router-dom";

const Profile = () => {
  
  const { user, token } = useContext(SessionContext);
  
  // console.log(user?.user?.profile);

  return (<div>
   
       <Link to={`/profile/6384b600a665cb46bd53adac`} ><img src={user?.user?.profile} alt={"name"} className="rounded-circle" style={{width:75, height:75}}/></Link>
  
  </div>)
};

export default Profile;
