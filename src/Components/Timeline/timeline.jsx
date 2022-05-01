import React from "react";
import { motion } from "framer-motion";
import "./timeline.css";
import calendar from "../assets/img/calendar1.png";
import Border from "../Customized Border/border";
import EventCard from "../Event Card/eventCard";

export default function Timeline() {
  return (
    <section className="my-5 container">
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center fs-1"
        >
          Timeline
        </motion.h2>
      </div>
      <Border />
      <p className="text-center fs-4 lh-s text-primary">
        Have a look what we scheduled for you!
      </p>
      <p className="text-center fs-6 fw-normal lh-1 text-muted">
        Lets start the Debugging, Decoding, Web Development journey!
      </p>

      <div className="timeline-container d-flex justify-content-center align-items-center my-5">
        <div className="calendar-img w-50">
          <img src={calendar} className="w-75" alt="..." />
        </div>
        <div className="event-container mx-2 border-start border-primary border-4">
          <div className="time-section d-flex flex-column justify-content-center align-items-center position-relative py-4">
            <div class="badge bg-success text-wrap fw-normal px-3 py-2 fs-6 position-absolute top-0 start-0 translate-middle">
              <div>Begin</div>
            </div>

            <div className="event-details">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>

            <div class="badge bg-danger text-wrap fw-normal px-3 py-2 fs-6 position-absolute top-100 start-0 translate-middle">
              <div>End</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
