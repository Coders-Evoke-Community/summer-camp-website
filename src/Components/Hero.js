import React from "react";
import {motion} from "framer-motion";
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
        <motion.h2 initial={{y:-250, opacity:0}} animate={{y:-10, opacity:1}} transition={{duration:1}} className="h1 fw-bold head-text">
          Lets Build with
          <br />
          <span className="d-block d-sm-inline gunmetal  rounded">
            Summer Fest
          </span>
        </motion.h2>
        <CountDown />
        <motion.div initial={{y:250, opacity:0}} animate={{y:10, opacity:1}} transition={{duration:1}} className="hero-btns">
              <motion.a href="#" whileHover={{scale: 1.1, rotate: 2}} className = "btn btn-primary mx-4">  Register</motion.a>
              <a href="#" className = "btn btn-primary"> <BsDiscord className="timer-icon mx-3" /> Join Discord</a>

            </motion.div>
      </div>

      <motion.div initial={{x:250, opacity:0}} animate={{x:10, opacity:1}} transition={{duration:1}} className="hero-img">
        <img src={heroImg} alt="" className="img-fluid scale" />
      </motion.div>
    </div>
  );
}
<script>new FlipDown(1538137672).start();</script>;
