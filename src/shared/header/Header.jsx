import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import AboutUs from '../../pages/about/AboutUs';
import PostDetails from '../../features/posts/PostDetails'; 
import NavBar from './NavBar';
import './style.css'
function Header() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default Header;
