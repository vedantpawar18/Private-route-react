import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import UserPage from './UserPage';
import Users from './Users';


const AllRoutes = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/users/:user_id" element={<UserPage/>} />
     </Routes>
    </div>
  )
}

export default AllRoutes