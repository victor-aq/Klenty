import React from "react";
import logo from "../Images/logo.png";
import "./Navbar.css";

import { Container } from "reactstrap";

function Navbar() {
  return (
    <Container>
      <div className="na">
        <div className="img-box">
          <a href="#">
            <img src={logo} className="logo " alt="logo" />
          </a>
          <ul className="navbar-nav list">
            <li className="nav-item ">Overview</li>
            <li className="nav-item">Feature Comparison</li>
            <li className="nav-item">Pricing</li>
          </ul>
        </div>

         <div className="btns ">
         <button type='submit' className='demo_btn'>SCHEDULE DEMO </button>
         <button type='submit' className='free_btn'>SIGN UP FOR FREE</button>
         
         </div>
      </div>

   
    </Container>
  );
}

export default Navbar;
