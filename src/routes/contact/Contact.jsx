
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
   
  

import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/Logo (1).png";
import heroBg from "../../assets/Photo (1).jpg";
import mapBg from "../../assets/Photo (2).png";
import "./Contact.css";

function Contact() {
  const contactInfo = [
    { 
      icon: <FaEnvelope />, text: "info@yourdomain.com"
     },

    {
       icon: <FaPhoneAlt />, text: "+1 (378) 400-1234" },
    { 
      icon: <FaGlobe />, text: "www.yourdomain.com" },
  ];

  const socialLinks = [
    {
       icon: <FaFacebookF />, href: "#" },
    { 
      icon: <FaTwitter />, href: "#" },
    { 
      icon: <FaLinkedinIn />, href: "#" },
    { 
      icon: <FaInstagram />, href: "#" },
  ];

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Project", to: "/project" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const pages = ["About Us", "Our Projects", "Our Team", "Contact Us", "Services"];
  const services = ["Kitchen", "Living Area", "Bathroom", "Dinning Hall", "Bedroom"];

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      <nav className="navbar">
        <Link to="/" className="brand">
          <img src={logo} alt="Interno" className="logo" />
          <span className="brand-name">Interno</span>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className={item.label === "Contact" ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <FaSearch className="search-icon" />
      </nav>

      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-card">
          <h1>Contact Us</h1>
          <p className="breadcrumb">Home / Contact</p>
        </div>
      </section>

      <div className="intro">
        <h2>We love meeting new people and helping them.</h2>
      </div>

      <section className="contact-body">
        <div className="info-card">
          <ul className="info-list">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <span className="info-icon">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="form-row">
            <input type="text" name="subject" placeholder="Subject" />
            <input type="text" name="phone" placeholder="Phone" />
          </div>

          <textarea
            name="message"
            placeholder="Hello I am interested in.."
            rows="5"
          />

          <button type="submit" className="send-btn">
            Send Now →
          </button>
        </form>
      </section>

      <section className="map">
        <div className="map-box" style={{ backgroundImage: `url(${mapBg})` }}>
          <FaMapMarkerAlt className="map-pin" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src={logo} alt="Interno" className="logo" />
            <span className="brand-name">Interno</span>
          </Link>
          <p>
            It is a long established fact that a reader will be distracted
            by looking.
          </p>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            {pages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>55 East Birchwood Ave, Brooklyn, New York 11201</p>
          <p>contact@interno.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </footer>

      <div className="copyright">
        Copyright © Interno | Designed by VictorFlow Templates - Powered by Webflow
      </div>
    </div>
  );

}

export default Contact;