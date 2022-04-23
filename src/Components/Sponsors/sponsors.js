import React from 'react';
import "./sponsors.css";
import codersEvoke from "../assets/img/logo.png";
import gmc from "../assets/img/givemycertificate.png";
import azure from "../assets/img/microsoft-azure-logo.png";
import gfg from "../assets/img/gfg-new-logo.png";
import Border from "../Customized Border/border";

export default function Sponsors() {
  return (
    <section className="my-5 container">
      <div>
        <h2 className="text-center fs-1">Sponsors</h2>
      </div>
      <Border />
      <div className ="container">
      <div className = "row">
      <div className="card col">
  <img src={gmc} className="card-img-top" alt="..."/>
</div>
  <div className="card col">
  <img src={azure} className="card-img-top" alt="..."/>
</div>
<div className="card col">
  <img src={gfg} className="card-img-top" alt="..."/>
</div>
</div>
</div>
    </section>
  );
}
