import React,{Component} from "react"
import codersEvoke from "../assets/img/logo.png";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
import "./teamCard.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Border from "../Customized Border/border";
import { Teammembers } from "./teammember";

export class TeamCard extends Component{
  render(){
  return (
    <div className="card m-3 bg-transparent border-0 w-75">
      <div class="bg-white p-3 border-curve">
        <div className="card-content border border-danger border-1 border-curve">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src= {this.props.img}
              class="profile-photo card-img-top bg-primary w-75 my-2 rounded-pill"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center fs-4">{this.props.id}</h5>
            <p class="card-text text-center">
              {this.props.role}
            </p>
            <div className="social-handles">
              <ul className="d-flex justify-content-center">
                <li className="social-icons mx-2">
                  <a href={this.props.github}>
                    <FaGithub />
                  </a>
                </li>
                <li className="social-icons mx-2">
                  <a href={this.props.linkedin}>
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons mx-2">
                  <a href={this.props.twitter}>
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
}
