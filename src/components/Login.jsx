import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    navigate('/Home');
  };

  const handleSignup = () => {
    // Redirect to the Sign Up page
    navigate('/SignUp');
  };

  const handleForgotPassword = () => {
    console.log('Redirecting to forgot password...');
    // You can navigate to a Forgot Password page here if needed
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
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
        <button onClick={handleLogin} className="btn login-btn">
          Login
        </button>
        <button onClick={handleSignup} className="btn login-signup-btn">
          Sign Up
        </button>
      </div>

      <p className="forgot-password">
        <button onClick={handleForgotPassword} className="forgot-password-btn">
          Forgot Password?
        </button>
      </p>
    </div>
  );
};

export default Login;
