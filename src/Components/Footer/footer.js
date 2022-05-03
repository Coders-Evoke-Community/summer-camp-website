import React from 'react';
import './footer.css';
import { BsDiscord, BsTwitter, BsLinkedin, BsInstagram, BsFacebook} from "react-icons/bs";
import ContactUs from "../Contact Us/contactUs";


export default function Footer() {
  return (
    <div className="footer-container">
    	<h1 style={{ color: "Yellow",
				textAlign: "center",
				marginTop: "-50px" }}>

      <p>Copyright &copy; Summer Fest - Coders Evoke</p>

      <ul className = "social-icons">
        <li className = "icons-list">
          <a href="#"><BsFacebook className="timer-icon mx-3" /></a>
        </li>
         <li className = "icons-list">
          <a href="#"><BsInstagram className="timer-icon mx-3" /></a>
        </li>
        <li className = "icons-list">
          <a href="#"><BsLinkedin className="timer-icon mx-3" /></a>
        </li>
        <li className = "icons-list">
          <a href="#"><BsTwitter className="timer-icon mx-3" /></a>
        </li>
         <li className = "icons-list">
          <a href="#"><BsDiscord className="timer-icon mx-3" /></a>
        </li>
      </ul>
      <ContactUs />
    </div>
  );
}
