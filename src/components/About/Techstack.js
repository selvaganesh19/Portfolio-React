import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiPython } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiC,
  SiCloudsmith,
} from "react-icons/si";
import { GiArtificialIntelligence, GiWireframeGlobe } from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC /> {/* C Programming */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiWireframeGlobe /> {/* UI/UX Design */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudsmith /> {/* Cloud Computing */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence /> {/* AI/ML */}
      </Col>
    </Row>
  );
}

export default Techstack;
