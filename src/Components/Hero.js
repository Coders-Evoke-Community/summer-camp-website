import React from 'react';
import heroImg from './assets/img/Hero_Illustration.png'


export default function Hero(){
	return(
		<div className="container" >

    <div className="container">
      <div className="row pt-xl-5 pt-lg-5 d-sm-flex flex-column-reverse flex-lg-row text-center text-md-start">
        <div className="col-xl-6 col-lg-7 ">
          <h3 className="h3 fw-semibold opacity-75">
            
            <span id="typed"></span>
          </h3>

          <h2 className="h1 fw-bold head-text">Lets Build with<br/><span className="d-block d-sm-inline gunmetal  rounded">Summer Fest</span></h2>
          <div className="timer">
          <p className="timer-head">Event Starts In</p>
          <div id="flipdown" className="flipdown"></div>
        
        </div>
          <a href="#" className="btn btn-color text-white fs-5">Discord</a>
          <a href="#" className="btn btn-color text-white fs-5">Get started</a>
        </div>
        <div className="col-xl-6 col-lg-5  position-relative hero-img">
          <img src={heroImg} alt="" className="img-fluid scale-down"/>
        </div>
      </div>
    </div>
  </div>

		)
}
<script>
new FlipDown(1538137672).start();
</script>
