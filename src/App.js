import Home from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CreateCourse from './pages/CreateCourse';
import ProfilePage from './pages/ProfilePage';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  

  return (
    <div >

        <Routes>

          <Route      path="/"             element={<Home/>}/>
          <Route      path="/signup"       element={<Signup/>}/>
          <Route      path="/login"        element={<Login/>}/>
          <Route      path="/course/:id"   element={<CourseDetails/>}/>
          <Route      path="/create"       element={<CreateCourse/>}/>
          <Route      path='/courses'       element={<ProfilePage> <Courses/></ProfilePage>}/>
        
        </Routes>
        
    </div>
  );
}

export default App;
