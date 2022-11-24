import React, { useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  useEffect(() => {
    const verifyUser = async () => {
      const storedToken = localStorage.getItem("authToken");
      let verifyRes = await axios.get(`http://localhost:5005/auth/verify`, {
        headers: { authorization: `Bearer ${storedToken}` },
      });
      console.log("profile page", verifyRes.data);
    };
    verifyUser();
  }, []);
  return <div>ProfilePage</div>;
}

export default ProfilePage;
