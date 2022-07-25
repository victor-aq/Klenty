import React from "react";
import "./Header.css";
import Hero from "../Images/Hero.png";
import google from "../Images/google.png";
import Grid from "@mui/material/Grid";

import { AiFillPlayCircle } from "react-icons/ai";
import add from "../Images/add.png";
import { Container, Row, Col } from "reactstrap";

function Header() {
  return (
    <div>
      <Container fluid
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <Row>
          <Col lg={6}>
            <div className="main__txt">
              <h1>
                Your search for a<br />
                <span class="locale">Reply.io Alternative</span>
                <br />
                ends here
              </h1>
            </div>
            <div className="Sub__txt">
              <p>
                Klenty hleps over 5000 winning scales team
                <br />
                stay organized, build new pipeline,move
                <br />
                them through sales stages faster and
                <br /> generate predictable revenue.
              </p>
              <h4 className="demo">
                
                <AiFillPlayCircle size={20} color="#504EE4" />
                Watch a demo
              </h4>
            </div>
          </Col>

          <Col  lg={6}>
          <div className="Loginpage__main">
          

           <div className="Entry__component" >
             <div className="Loginpage__entrycompo">
          
             
             <div className='Sign__In'>
               <div>
                  <div className="text">Get started with your 14-days free trail</div>
                   <form >
                     
                     <input className= 'box__text' type="email"  placeholder='Enter Work Email'/> 
                      <button type='submit' className='signup__btn' >SIGN UP</button>
                   </form>
                </div>
                  

                 
                 <div  className="login__ordiv">
                  <div className="login__divider"></div>
                  <div  className="login__or">OR</div>
                  <div  className="login__divider"></div>
                </div>

                  <div className="google" ><img className='google__img'  src={google} /></div>
                  <div className="work__email">*Use work email only</div>
             </div>
             </div>
               
       
             
            </div>
            </div>
            
           
          </Col>
        </Row>
      </Container>

     

      <Container>
        <div className="display">
          <h1 className="text-centre txt">Over <span className="text-primary"> 5,000 Happy Customers</span> from Startups to Large Enterprises
          </h1>
          <img className="img-fluid img" src={add}></img>
        </div>
      </Container>
    </div>
  );
}

export default Header;
