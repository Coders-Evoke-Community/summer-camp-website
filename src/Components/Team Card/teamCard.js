import codersEvoke from "../assets/img/logo.png";
import "./teamCard.css";
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";

export default function TeamCard() {
  return (
    <div className="card m-3 bg-transparent border-0">
      <div class="bg-white p-3 border-curve">
        <div className="card-content border border-danger border-1 border-curve">
          <img
            src={codersEvoke}
            class="card-img-top bg-primary image-curve"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center fs-4">Rohit Gupta</h5>
            <p class="card-text text-center">
              Community Manager and Event Lead
            </p>
            <div className="social-media">
              <ul className="social-media-list">
                <li className="social-icons-list">
                  <a href="#">
                    <FaLinkedinIn/>
                  </a>
                </li>
                <li className="social-icons-list">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="social-icons-list">
                  <a href="#">
                    <FaGithub/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
