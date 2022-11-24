import Home from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CreateCourse from './pages/CreateCourse';
import ProfilePage from './pages/ProfilePage';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route      path="/"             element={<Home/>}/>
          <Route      path="/signup"       element={<Signup/>}/>
          <Route      path="/login"        element={<Login/>}/>
          <Route      path="/courses"      element={<Courses/>}/>
          <Route      path="/course/:id"   element={<CourseDetails/>}/>
          <Route      path="/create"       element={<CreateCourse/>}/>
          <Route      path="/profile"       element={<ProfilePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
