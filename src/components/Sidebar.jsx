import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Sidebar() {
  return (
    <>
    <nav className="sidebar ">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/roadmap">Road Map</Link></li>
            <li><Link to="/Group">Group</Link></li>
            <li><Link to="/Leaderboard">Leader Board</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Sidebar
