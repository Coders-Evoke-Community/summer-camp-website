import React from "react";
import "./eventcard.css";
import checkbox from "../assets/img/tickbox1.svg";

export default function EventCard() {
  return (
    <section className="d-flex position-relative">
      <div className="position-absolute top-50 start-0 translate-middle">
        <img src={checkbox} alt="" />
      </div>
      <div class="card bg-white m-5 border shadow p-2 bg-body rounded-3">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-primary fw-bold">2 June, 2022</h6>
          <h5 class="card-title">Summer Build Announced</h5>
          <p class="card-text text-muted fst-italic">
            This is where we set the ball rolling
          </p>
        </div>
      </div>
    </section>
  );
}
