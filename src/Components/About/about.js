import React from "react";
import "./about.css";
import codersEvoke from "../assets/img/About_Image.svg";
import Border from "../Customized Border/border";


export default function About() {
  return (
    <section className="my-5 container" id = "about">
      <div>
        <h2 className="text-center fs-1">About us</h2>
      </div>
      <Border />
      <div className="row m-auto align-items-center">
        <img className="about-img img-fluid  col mx-2" src={codersEvoke} alt="" />
        <div className="about-text m-2 col">
          <p className="text-primary fs-2">Welcome to</p>
          <h1 className="text-danger fs-1 ">The Biggest Summer Fest </h1>
          <h1 className="text-danger fs-1 ">Of Year 2022</h1>
          <p className="fs-3 my-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea voluptates dicta, explicabo pariatur libero fugit laboriosam quam delectus minima doloribus quaerat est totam quae repudiandae quisquam cupiditate eum! Reprehenderit!</p>
        </div>
      </div>
    </section>
  );
}

