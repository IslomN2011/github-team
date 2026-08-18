
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import photo5 from '../../assets/photo5.png'
import photo6 from '../../assets/photo6.png'
import photo7 from '../../assets/photo7.png'
import photo8 from '../../assets/photo8.png'
import photo9 from '../../assets/photo9.png'

import './about.css'

const About = () => {
  return (
    <div className="about">
    
      <section className="about-header">
        <div className="about-header-overlay"></div>
        <div className="about-header-content">
          <h1>About Us</h1>
          <p>Home / About</p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-mark">”</div>
          <h2 className="quote-text">I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h2>
          <p className="quote-author">SUNNY WILLIAMS</p>
        </div>
      </section>

      <section className="what-we-do">
        <div className="what-we-do-container">
          <div className="what-we-do-content">
            <h2>What We Do</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its hypotaxis the points of using that it has a more-or-less normal.</p>
            <button className="concept-btn">Our Concept</button>
          </div>
          <div className="what-we-do-image">
            <img src={photo5} alt="What We Do" />
          </div>
        </div>
      </section>

      <section className="end-result">
        <div className="end-result-container">
          <div className="end-result-image">
            <img src={photo6} alt="End Result" />
          </div>
          <div className="end-result-content">
            <h2>The End Result</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its hypotaxis the points of using that it has a more-or-less normal.</p>
            <button className="portfolio-btn">Our Portfolio</button>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What the People Thinks About Us</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src={photo7} alt="Team Member" className="testimonial-image" />
            <h3>John Designer</h3>
            <p className="testimonial-role">Lead Designer</p>
          </div>
          <div className="testimonial-card">
            <img src={photo8} alt="Team Member" className="testimonial-image" />
            <h3>Jane Architect</h3>
            <p className="testimonial-role">Architect</p>
          </div>
          <div className="testimonial-card testimonial-card-special">
            <h3>Natasha Julie</h3>
            <p className="testimonial-role">Design, Australia</p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
            <p className="contact-info">+1 (576) 400-1234</p>
            <p className="contact-email">julie@email.com</p>
          </div>
          <div className="testimonial-card">
            <img src={photo9} alt="Team Member" className="testimonial-image" />
            <h3>Mike Specialist</h3>
            <p className="testimonial-role">Interior Specialist</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <h2>Creative project? Let's have a productive talk.</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <textarea placeholder="Hello Iam Intrested In.." className="form-textarea"></textarea>
            <button type="submit" className="form-button">Send Now</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default About