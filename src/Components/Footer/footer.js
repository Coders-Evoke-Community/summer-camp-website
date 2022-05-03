import React from 'react';
import './footer.css';
import ContactUs from "../Contact Us/contactUs";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { BsDiscord, BsTwitter, BsLinkedin, BsInstagram, BsFacebook} from "react-icons/bs";
export default function Footer() {
  return (
    <div>
    <div class="container-fluid">
    <div class="row tex-center">
        <div class="col-sm-12 col-md-6 col-lg-6 p-5 m-auto">
         <h2 class="head1">Get in touch with us</h2>
        <img class="contact" src="https://codess.cafe/images/banner.png"/>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 p-5">
        <form>
            <p>Full Name:</p>
            <input type="text" placeholder='Full Name'></input><br/><br/>
            <p>Email:</p>
            <input type="email" placeholder='Email'></input><br/><br/>
            <p>Your Message</p><textarea placeholder='Write your message here'></textarea>
        </form>
        <div class="submit">
        <button class='btn btn-primary'>Submit</button>
        </div>
        </div>
    </div>
    </div>
    <div class="container-fluid">
      <div class="row p-2">
        <div class="col-sm-12 col-md-9">
        <h6 class="copy">Copyright &copy; Summer Fest - Coders Evoke</h6>
        </div>
      <div class="col-sm-12 col-md-3">
        <a href="#"><img src="https://img.icons8.com/color/48/000000/facebook-new.png"></img></a>
        <a href="#"><img src="https://img.icons8.com/color/48/000000/linkedin.png"></img></a>
        <a href="#"><img src="https://img.icons8.com/color/48/000000/discord-logo.png"></img></a>
        <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter --v1.png"></img></a>
        <a href="#"><BsInstagram className="timer-icon mx-3" /></a>
      </div>
    </div>
    </div>
    </div>
  );
}
