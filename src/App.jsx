import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation , Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import RoadMap from './components/RoadMap';
import LeaderBoard from './components/Leaderboard';
import Contact from './components/Contact';
import Navbar from './components/Sidebar';
import Login from './components/Login';
import SignUp from './components/Signup';
import AddFriend from './components/AddFriend';
import  Group  from './components/Group';
import logo from './assets/logo-color.png';
import './App.css';

function App() {
  const location = useLocation(); // Get the current route

  // Check if the current route is either "/login" or "/signup"
  const hideSidebar = location.pathname === '/Login' || location.pathname === '/SignUp';

  return (
    <>
    <header className='h-16 bg-[#043039] text-white z-10 border-none fixed '>
      <img src={logo} alt="logo" className='h-32 w-32 rounded-lg m-0'/>
        <Link to='Login'>
          <button className='text-white ml-[74rem]'>Login</button>
        </Link>
        <Link to='SignUp'>
        <button className='text-white m-4'>SignUp</button>
        </Link>
    </header>
      <div className="flex">
        {!hideSidebar && <Navbar />}
        <div className={`flex-grow p-4 ${!hideSidebar ? 'ml-[12rem] mt-12' : ''}`}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/group" element={<Group />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="Group/AddFriend" element={<AddFriend />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
