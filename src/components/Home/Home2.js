import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I am passionate about programming and constantly learning new things! 🚀
  <br />
  <br />
  I am proficient in:
  <i>
    <b className="purple"> C, Java, and Python </b>
  </i>
  for programming, and have hands-on experience in
  <i>
    <b className="purple"> HTML, CSS, and Figma </b>
  </i>
  for front-end development.
  <br />
  <br />
  I am skilled in developing products and tools using:
  <i>
    <b className="purple"> Google Colab</b> and modern Python frameworks like
    <b className="purple"> Flask and Machine Learning libraries</b>
  </i>
  .
  <br />
  <br />
  My areas of interest include
  <i>
    <b className="purple"> Web Development, UI/UX Design, Machine Learning, and Cloud Computing.</b>
  </i>
  <br />
  <br />
  I’ve worked with tools like
  <b className="purple"> Visual Studio Code, Google Colab, and Jupyter Notebook</b>, and am familiar with
  <i>
    <b className="purple"> Docker and Cloud services </b>
  </i>
  through hands-on projects.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/selvaganesh19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/selvaganesh-velayutham-025bb1284/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_selvxsh.__/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
