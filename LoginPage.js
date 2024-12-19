import React from 'react';
import './LoginPage';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/path-to-logo.png" alt="CodeAnt AI" className="logo" />
        <h2>Welcome to CodeAnt AI</h2>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
