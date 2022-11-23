import Home from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
