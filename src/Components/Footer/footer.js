import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsDiscord, BsTwitter, BsLinkedin, BsInstagram, BsFacebook} from "react-icons/bs";
export default function Footer() {
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
    <div>
    <div class="container-fluid" id = "contact">
    <div class="row tex-center">
        <div class="col-sm-12 col-md-6 col-lg-6 p-5 m-auto">
         <h2 class="head1">Get in touch with us</h2>
        <img class="contact" src="https://codess.cafe/images/banner.png" alt="contact-banner"/>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 p-5">
        <form ref = {formRef} onSubmit = {sendEmail} >
            <p>Full Name:</p>
            <input type="text" placeholder='Full Name' name = "name"></input><br/><br/>
            <p>Email:</p>
            <input type="email" placeholder='Email' name = "email"></input><br/><br/>
            <p>Your Message</p><textarea placeholder='Write your message here' name = "message"></textarea>
        <div class="submit">
        <input type="submit" class='btn btn-primary' value="Send Message"/>
        </div>
        </form>
        </div>
    </div>
    </div>
    <div class="container-fluid">
      <div class="row p-2">
        <div class="col-sm-12 col-md-9">
        <h6 class="copy">Copyright &copy; Summer Fest - Coders Evoke</h6>
        </div>
      <div class="col-sm-12 col-md-3 footer-social-icons">
        <a href="https://discord.gg/TYnvwhxRCd" target = "_blank" rel="noreferrer" ><BsDiscord className="timer-icon mx-3 footer-icon" /></a>
        <a href="https://twitter.com/EvokeCoders" target="_blank" rel="noreferrer"><BsTwitter className="timer-icon mx-3" /></a>
        <a href="https://www.linkedin.com/in/coders-evoke-a26305213/" target = "_blank" rel="noreferrer"><BsLinkedin className="timer-icon mx-3" /></a>
        <a href="https://www.facebook.com/CodersEvokeCommunity" target = "_blank" rel="noreferrer"><BsFacebook className="timer-icon mx-3" /></a>
        <a href="https://instagram.com/coders_evoked" target = "_blank" rel="noreferrer"><BsInstagram className="timer-icon mx-3" /></a>
      </div>
    </div>
    </div>
    </div>
  );
}
