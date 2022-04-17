import codersEvoke from "../assets/img/logo.png";
import "./teamCard.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Border from "../Customized Border/border";

export default function TeamCard() {
  return (
    <div className="card m-3 bg-transparent border-0 w-25">
      <div class="bg-white p-3 border-curve">
        <div className="card-content border border-danger border-1 border-curve">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={codersEvoke}
              class="card-img-top bg-primary w-75 my-2 rounded-pill"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center fs-4">Rohit Gupta</h5>
            <p class="card-text text-center">
              Community Manager and Event Lead
            </p>
            <div className="social-handles">
              <ul className="d-flex justify-content-center">
                <li className="social-icons mx-2">
                  <a href="#">
                    <FaGithub />
                  </a>
                </li>
                <li className="social-icons mx-2">
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons mx-2">
                  <a href="#">
                    <FaTwitter />
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
