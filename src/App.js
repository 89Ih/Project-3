import Home from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CreateCourse from "./pages/CreateCourse";
import { Route, Routes } from "react-router-dom";
import AddCredit from "./pages/AddCredit";
import TeachersRoutes from "./pages/TeachersRoutes";
import PrivateRoutes from "./pages/PrivateRoutes";
import UpdateProfile from "./pages/UpdateProfile";
import "./App.css";
import { SessionContext } from "./contexts/SessionContext";
import { useContext } from "react";
import MyCourses from "./pages/MyCourses";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route
          path="courses"
          element={
            <PrivateRoutes>
              <Courses />
            </PrivateRoutes>
          }
        />
        <Route
          path="create"
          element={
            <TeachersRoutes>
              <CreateCourse />
            </TeachersRoutes>
          }
        />
        <Route path="/myCourses" element={<MyCourses />} />
        <Route path="/credit" element={<AddCredit />} />
        <Route path="/profile/:id" element={< UpdateProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
