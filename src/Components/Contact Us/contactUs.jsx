import React, {useState, useRef} from "react";
import emailjs from 'emailjs-com';
import './contactUs.css';

export default function ContactUs() {

    const formRef = useRef(null);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xz815jo', 'template_dtnfce1', formRef.current, 'VeSEtywUosCZstzFy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Form Submitted");
    };
  
  return (
    <section>
      <div classNameName="contact-us-form container w-50">
        <form method="post" ref={formRef} name="google-sheet" onSubmit = {sendEmail}>
          <div className="mb-3">
            <label for="fullname" className="form-label">
              Full Name
            </label>
            <input type="text" className="form-control contact-input" id="fullname" name = "name"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputemail1" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control contact-input" id="exampleInputemail1"  name = "email"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Type your message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            name = "message"></textarea>
          </div>
          {/* <input type="submit" className="btn btn-primary" value="Send Message"/> */}
           
        </form>
      </div>
    </section>
  );
}
