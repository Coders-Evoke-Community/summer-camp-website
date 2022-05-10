import React from "react";
import "./eventcard.css";
import checkbox from "../assets/img/tickbox1.svg";

export default function EventCard(props) {
  return (
    <section className="d-flex position-relative">
      <div className="position-absolute top-50 start-0 translate-middle">
        <img  src={checkbox} alt=""  />
      </div>
      <div className="card bg-white m-5 border shadow p-2 bg-body rounded-3">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-primary fw-bold">{props.date}</h6>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-muted fst-italic">
            This is where we set the ball rolling
          </p>
        </div>
      </div>
    </section>
  );
}
