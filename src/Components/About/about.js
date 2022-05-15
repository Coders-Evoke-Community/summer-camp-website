import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import "./about.css";
import AboutImage from "../assets/img/About_Image.svg";
import Border from "../Customized Border/border";
import {useInView} from 'react-intersection-observer';

export default function About() {
  const {ref, inView, AboutTextinView} = useInView();

  const AboutImageAnimation = useAnimation();
  const AboutTextAnimation = useAnimation();
  
  useEffect(() => {
    if(inView){
      AboutImageAnimation.start({
        x: 0,
        transition:{
          type: 'spring', duration: 2, delay: 0.5, bounce: 0.3, 
        }
      })
    }
    if(!inView){
      AboutImageAnimation.start({
        x: '-100vw'
      })
    }

    if(AboutTextinView){
      AboutTextAnimation.start({
        x: '100vw',
        transition:{
          type: 'spring', duration: 2, delay: 0.5, bounce: 0.3, 
        }
      })
    }
    if(!AboutTextinView){
      AboutTextAnimation.start({
        x: 0
      })
    }
  })
  return (
    <section  className="my-5 container" id = "about">
      <div>
        <motion.h2 initial={{opacity:0}} animate = {{opacity:1}} transition = {{duration:1}} className="text-center fs-1">About us</motion.h2>
      </div>
      <Border />
      <div ref={ref} className="">
      <motion.div   animate={AboutImageAnimation} className="row m-auto align-items-center">
        <img  className="about-img img-fluid  col mx-2" src={AboutImage} alt="" />
        <motion.div animate={AboutTextAnimation} className="about-text m-2 col">
          <p className="text-primary fs-1">Welcome to</p>
          <h1 className="about-text-head  ">The Biggest Summer Fest </h1>
          <h1 className="about-text-head  ">Of Year 2022</h1>
          <p className="fs-6 my-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea voluptates dicta, explicabo pariatur libero fugit laboriosam quam delectus minima doloribus quaerat est totam quae repudiandae quisquam cupiditate eum! Reprehenderit!</p>
        </motion.div>
      </motion.div>
      </div>
      
    </section>
  );
}

