import React, { useState } from 'react';
import './Component/In&Up.css';
import { Link } from "react-router-dom";
import search from './search.png';

function log() {
  const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'visibility_off';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'visibility';
  }
});




  return (
    <div className="container1">
      <div className="sigup">
        <h1 className="heading">
          Ingredient<span className="header-color"> Insights</span>
        </h1>
        <div className="content">
          <h1 className="header-content">Welcome to Ingredient Insights AI</h1>
          <p className="para-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta
            deserunt hic qui sint dolorum eaque.
          </p>
        </div>
        <div className="google">
          <img className="search-img" src={search} />
          <button className="google-btn">Sign up with Google</button>
        </div>
        <div className="line">
          <p className="line-p">Or Sign Up with e-mail</p>
        </div>
        <div className="internal-signup">
          <label htmlFor="email">Email</label>
          <input
            className="email"
            type="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="password"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <div className="checkbox">
            <button className="toggle-btn">
              <span id="toggle" className="material-symbols-outlined">
                visibility
              </span>
            </button>
          </div>
          <button className="signup-btn">Sign in</button>
        </div>
        <div className="footer">
          <p className="header-acc">
            Dont's have any account?<Link to="../Signup"><a href="#"> Sign up</a></Link>
          </p>
        </div>
        <p className="privacy">
          By signing up, you agree to Ingredient's<a href="#">privacy Policy</a>&
          <a href="#">Terms of Service</a>
        </p>
      </div>
    </div>
  );
}

export default log;