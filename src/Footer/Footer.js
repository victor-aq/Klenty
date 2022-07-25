import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";
import Carousel from 'react-bootstrap/Carousel'
import Hero from "../Images/Hero.png";
import fi1 from "../Images/fi1.png";
import fi11 from "../Images/fi11.png";
import fi2 from"../Images/fi2.png";
import fi22 from"../Images/fi22.png";
import fi3 from"../Images/fi3.png";
import fi33 from"../Images/fi33.png";


function Footer() {
  return (
    <Container fluid style={{ backgroundImage: `url(${Hero})` }}>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
        
        <div className="cards">
          
        <Carousel variant="dark">
        <Carousel.Item>
        <div className="card">
        <img  className="db" src={fi11}/>
     <h4 className="f1"> Klenty is easy to use, with many features that help to<br/> have an approach of new clients. Sending emails to <br/>prospects is easier.</h4>
     <h4 className="locale"> Laura Villeda</h4>
     <p className="f2" >Lead Project Manager - Blacktrust</p>
          
        </div>
        <div className="img_1"><img className="image" src={fi1}/>
    
</div>
         
          </Carousel.Item>

        <Carousel.Item>
          
        <div className="card">
        <img  className="db" src={fi22}/>
     <h4 className="f1"> Klenty has helped us engage a far greater number <br/>of leads per week, resulting in an outbound <br/>revenue jump of 93%.</h4>
     <h4 className="locale"> Adam</h4>
     <p className="f2" >President, Double The Donation</p>
          
        </div>
        <div className="img_1"><img className="image" src={fi2}/>
        </div>
         
        
        </Carousel.Item>

        <Carousel.Item>
         
        <div className="card">
        <img  className="db" src={fi33}/>
     <h4 className="f1">Klenty changed our business. It allowed <br/>our outbound sales team to leverage<br/> their time and skills.</h4>
     <h4 className="locale"> Gavin Tye</h4>
     <p className="f2" >Sales Director, Red Eye Ventures</p>
          
        </div>
        <div className="img_1"><img className="image" src={fi3}/>
        </div>
       
          
        </Carousel.Item>
      </Carousel>
  












       

 
     </div>
     

        </Col>
        <Col sm={3}></Col>
      </Row>

    
    </Container>
  );
}

export default Footer;
