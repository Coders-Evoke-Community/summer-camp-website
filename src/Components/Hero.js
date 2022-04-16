import React from "react";
import {BsDiscord} from "react-icons/bs";
import './hero.css';
import heroImg from "./assets/img/Hero Illustration.svg";
import CountDown from "./Countdown Timer/countdown";
;

export default function Hero() {
  return (
    <>
      
        <div className="container">
          <div className="row pt-xl-5 pt-lg-5 d-sm-flex flex-column-reverse flex-lg-row text-center text-md-start">
            <div className="col-xl-6 col-lg-7 ">
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
            </div>
            <div className="hero-btns">
              <a href="#" className = "btn btn-primary mx-4">  Register</a>
              <a href="#" className = "btn btn-primary"> <BsDiscord className="timer-icon mx-3" /> Join Discord</a>

            </div>
          </div>
          <div>
            </div>
          
          <div className="col-xl-6 col-lg-5  position-relative hero-img">
          <img src={heroImg} alt="" className="img-fluid scale-down" />
        </div>
        </div>
      

      
    </>
  );
}
<script>new FlipDown(1538137672).start();</script>;
