
import { useContext } from 'react'
import Home from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CreateCourse from './pages/CreateCourse';
import ProfilePage from './pages/ProfilePage';
import { SessionContext } from './contexts/SessionContext'
import { NavLink,Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const { isAuthenticated } = useContext(SessionContext)
  return (
    <div className="App">

          {isAuthenticated ? (
        <NavLink to='/courses'>All Courses</NavLink>
      ) : (
        <NavLink to='/login'>Login</NavLink>
      )}

        <Routes>
          <Route      path="/"             element={<Home/>}/>
          <Route      path="/signup"       element={<Signup/>}/>
          <Route      path="/login"        element={<Login/>}/>
          <Route      path="/course/:id"   element={<CourseDetails/>}/>
          <Route      path="/create"       element={<CreateCourse/>}/>
          <Route      path='/courses'      element={<ProfilePage> <Courses/></ProfilePage>}/>
          </Routes>
    </div>
  );
}

export default App;
