import React from 'react';
import './footer.css';
import { BsDiscord, BsTwitter, BsLinkedin, BsInstagram, BsFacebook} from "react-icons/bs";


export default function Footer() {
  return (
    <div className="footer-container">
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
    </div>
  );
}
