import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from '../components/PrivateRoute';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import UserPage from './UserPage';
import Users from './Users';


const AllRoutes = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/users" element={<PrivateRouter>
        <Users/>
        </PrivateRouter>} />
      <Route path="/users/:user_id" element={<PrivateRouter>
        <UserPage/>
        </PrivateRouter>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
    </div>
  )
}

export default AllRoutes