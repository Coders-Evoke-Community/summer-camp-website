import React from 'react'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import './Header.css'

export default function Header(){
	return(

			<nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <Link className="navbar-brand fw-bold text-gunmetal" to="/">
        <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className=""><img src="https://i.ibb.co/3cv4nGh/sun-3-256.png" alt="" width="50px" className="img-fluid imgsize"/></motion.span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <motion.ul initial={{x:-250, opacity:0}} animate={{x:-10, opacity:1}} transition={{duration:1.5}} className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
          <li className="nav-item">
            <Link className="nav-link active nav-text" aria-current="page" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-text" href="/#about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-text" href="/#sponsors">SPONSORS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-text" href="/#faqs">FAQS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-text" href="#contact">CONTACT</a>
          </li>
        </motion.ul>
      </div>
    </div>
  </nav>
		)
}