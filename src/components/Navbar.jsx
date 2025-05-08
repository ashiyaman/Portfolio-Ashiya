import { Link } from "react-router-dom";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showClose, setShowClose] = useState(false)
  return (
    <nav className="flex">
      <a href="/" className="logo" aria-label="Ashiya's logo">ab</a>
      {!showNav && 
        <button onClick={() => {
          setShowNav(!showNav) 
          setShowClose(!showClose)}} 
          className={`hamburger toggle`}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>}
        {showClose && <button onClick={() => {
          setShowNav(!showNav)
          setShowClose(!showClose)
        }} className="hamburger">X</button>}
      <div className={`flex nav ${showNav ? 'show' : ''}`}>
        <ul className="flex">
          <li>
            <Link to="/">
              <strong>Home</strong>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <strong>About</strong>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <strong>Work</strong>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <strong>Skills</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
