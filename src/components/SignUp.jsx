import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';  // Use your existing CSS file

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = () => {
    navigate('/Home');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>

      <div className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input-field"
        />
      </div>

      <div className="button-group">
        <button onClick={handleSignUp} className="btn signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;