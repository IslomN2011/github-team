
import React from 'react'
import { Link } from 'react-router-dom'


import './header.css'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (

      <div className="container1">
      <header className="header">
        <nav className="navbar">

          <div className="logo">
            <img src={logo} alt="Interno" />
            <h1>Interno</h1>
          </div>

          <ul className="nav-menu">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>


            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/project">Project</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <CiSearch className="search-icon" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;