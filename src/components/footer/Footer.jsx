
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png"

import './footer.css'

const Footer = () => {
  return (
    <div>

     
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Interno" />
            <h2>Interno</h2>
          </div>

          <p>
            It is a long established fact that a reader
            <br />
            will be distracted lookings.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-column">
          <h3>Pages</h3>

          <a href="#">About Us</a>
          <a href="#">Our Projects</a>
          <a href="#">Our Team</a>
          <a href="#">Contact Us</a>
          <a href="#">Services</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <a href="#">Kitchen</a>
          <a href="#">Living Area</a>
          <a href="#">Bathroom</a>
          <a href="#">Dinning Hall</a>
          <a href="#">Bedroom</a>
        </div>

        <div className="footer-column contact">
          <h3>Contact</h3>

          <p>
            55 East Birchwood Ave.
            <br />
            Brooklyn, New York 11201
          </p>

          <p>contact@interno.com</p>

          <p>(123) 456 - 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </div>
    </footer>

    </div>
  )
}
export default Footer