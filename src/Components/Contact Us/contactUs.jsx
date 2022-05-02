import React from "react";
import "./contactUs.css";

export default function ContactUs() {
  return (
    <section>
      <div className="contact-us-form container w-50">
        <form>
          <div class="mb-3">
            <label for="fullname" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputemail1" class="form-label">
              Email Address
            </label>
            <input type="email" class="form-control" id="exampleInputemail1" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Type your message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
