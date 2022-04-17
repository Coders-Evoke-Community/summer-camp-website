import React from "react";
import { BsDiscord } from "react-icons/bs";
import "./hero.css";
import heroImg from "./assets/img/Hero Illustration.svg";
import CountDown from "./Countdown Timer/countdown";
export default function Hero() {
  return (
    <div className="d-flex container justify-content-center align-items-center">
      <div className="flex-fill col-xl-6 col-lg-7 ">
        <h3 className="h3 fw-semibold opacity-75">
          <span id="typed"></span>
        </h3>
        <h2 className="h1 fw-bold head-text">
          Lets Build with
          <br />
          <span className="d-block d-sm-inline gunmetal  rounded">
            Summer Fest
          </span>
        </h2>
        <CountDown />
        <div className="hero-btns">
              <a href="#" className = "btn btn-primary mx-4">  Register</a>
              <a href="#" className = "btn btn-primary"> <BsDiscord className="timer-icon mx-3" /> Join Discord</a>

            </div>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="" className="img-fluid scale" />
      </div>
    </div>
  );
}
<script>new FlipDown(1538137672).start();</script>;
