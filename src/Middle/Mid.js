import React from "react";
import "./Mid.css";
import { Container, Row, Col } from "reactstrap";
import c1 from"../Images/c1.png";
import c2 from"../Images/c2.png";
import c3 from"../Images/c3.png";
function Mid() {
  return (
    <Container>
      <div className="mid__txt">
        <h3> 4 reasons why <span className="locale_2"> Klenty </span>is best Reply.io Alternative </h3>
      </div>
      <Row>
        <Col lg={4}>
          <div className="c1_img"><img src={c1}/></div>
          <div className="card-1">
          
           <p>Basic plcaeholder <br/>personalization</p>
           <h5 className="ct-1">Advanced <br/>personaliztion <br/>Engine</h5>
          </div>
        </Col>
        <Col lg={4}>
        <div className="c2_img"><img src={c2}/></div>
        <div className="card-1">
        <p>Virtually non-existent <br/>Rep-level permission</p>
        <h5 className="ct-2">Air-tight User Permissions <br/>Settings for fast-scalling <br/>and enterprise sales teams</h5>
       </div></Col>
        <Col lg={4}>
        <div className="c3_img"><img src={c3}/></div>
        <div className="card-1">
        <p>Executing the same<br/>tasks for all prospects</p>
        <h5 className="ct-3">Automated Activity<br/>Switches based on <br/>prospect behaviour</h5>
       </div></Col>
      </Row>
    </Container>
  );
}

export default Mid;
