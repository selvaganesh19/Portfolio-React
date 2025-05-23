import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Selvaganesh </span> from
  <span className="purple"> Tiruppur, Tamil Nadu, India.</span>
  <br />
  I am currently pursuing a <b>B.Tech in Artificial Intelligence and Machine Learning</b> at 
  <span className="purple"> Bannari Amman Institute of Technology, Sathyamangalam</span>.
  <br />
  I have completed a <b>Diploma in Electrical and Electronics Engineering (DEEE)</b> at 
  <span className="purple"> PSG Polytechnic College, Coimbatore</span>.
  <br />
  <br />
  Apart from coding, some other activities that I love to do include:
  <b className="purple"> video editing, listening to music, drawing, and photography.</b>
</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Crime Thriller Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Selvaganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
