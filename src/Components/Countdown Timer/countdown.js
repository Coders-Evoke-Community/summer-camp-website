import { BsCalendar2Event } from "react-icons/bs";
import "./countdown.css";
import { useEffect, useRef, useState } from "react";

export default function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const currentyear = new Date().getFullYear();
    const countdownDate = new Date(`April 18 ${currentyear} 00:00:00`);
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
    <section className="timer-container">
      <section className="timer">
        <div className="timer-body">
          <div className="timer-headStyle">
            <BsCalendar2Event className="timer-icon" />
            <h2 className="timer-heading">CountDown Timer</h2>
          </div>
          <p>
            Countdown to a really special date. One you could or would never
            imagine
          </p>
        </div>

        <div className="time-container">
          <section className="time">
            <p className="time-number">{timerDays}</p>
            <p>
              <small className="time-text">Days</small>
            </p>
          </section>
          <span className="time-colon">:</span>
          <section className="time">
            <p className="time-number">{timerHours}</p>
            <p>
              <small className="time-text">Hours</small>
            </p>
          </section>
          <span className="time-colon">:</span>
          <section className="time">
            <p className="time-number">{timerMinutes}</p>
            <p>
              <small className="time-text">Minutes</small>
            </p>
          </section>
          <span className="time-colon">:</span>
          <section className="time">
            <p className="time-number">{timerSeconds}</p>
            <p>
              <small className="time-text">Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}
