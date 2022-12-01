import "./App.css";
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
import MyCourses from "./pages/MyCourses";

import { SessionContext } from "./contexts/SessionContext";
import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import CoursesBasic from "./pages/CoursesBasic";
import Header from "./comps/Header";

function App() {
  const { isAuthenticated } = useContext(SessionContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/basic" element={<CoursesBasic />} />
        {isAuthenticated && (
          <Route
            path="courses"
            element={
              <PrivateRoutes>
                <Courses />
              </PrivateRoutes>
            }
          />
        )}
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
        <Route path="/profile/:id" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
