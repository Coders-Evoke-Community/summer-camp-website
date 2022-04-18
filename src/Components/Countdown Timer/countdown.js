import { BsCalendar2Event } from "react-icons/bs";
import "./countdown.css";
import {motion} from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const currentyear = new Date().getFullYear();
    const countdownDate = new Date(`April 20 ${currentyear} 20:00:00`);
    console.log(countdownDate);

    interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate - now;

      const days = Math.floor(distance / 1000 / 60 / 60 / 24);
      const hours = Math.floor((distance / 1000 / 60 / 60) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container text-white w-75 h-50  d-flex align-items-center">
      <motion.section initial={{x:-250, opacity:0}} animate={{x:-10, opacity:1}} transition={{duration:1}} className="timer text-center vw-100 p-2">
        <div className="timer-headStyle d-flex justify-content-start align-items-center text-center fs-2">
         {/* <BsCalendar2Event className="timer-icon mx-3" /> */}
         <center> <h5 className="timer-heading pt-2 text-black">Events Starts In</h5> </center>
          <br/>
        </div>

        <div className="time-container d-flex justify-content-start">
          <section className="time px-2">
            <span className="time-number fs-2 p-1">{timerDays}</span>
            <p>
              <small className="time-text fw-light">Days</small>
            </p>
          </section>
          <span className="time-colon fs-2">:</span>
          <section className="time px-2">
            <span className="time-number fs-2">{timerHours}</span>
            <p>
              <small className="time-text fw-light">Hours</small>
            </p>
          </section>
          <span className="time-colon fs-2">:</span>
          <section className="time px-2">
            <span className="time-number fs-2">{timerMinutes}</span>
            <p>
              <small className="time-text fw-light">Minutes</small>
            </p>
          </section>
          <span className="time-colon fs-2">:</span>
          <section className="time px-2">
            <span className="time-number fs-2">{timerSeconds}</span>
            <p>
              <small className="time-text fw-light">Seconds</small>
            </p>
          </section>
        </div>
      </motion.section>
    </section>
  );
}
