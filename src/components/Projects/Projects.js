import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traffic from "../../Assets/Projects/traffic.png";
import ev from "../../Assets/Projects/ev.png";
import game2048 from "../../Assets/Projects/2048.png";
import pdfBot from "../../Assets/Projects/pdfbot.png";
import emailBot from "../../Assets/Projects/emailbot.png"; // Add your new image here

function Projects() {
  const isMobile = () => {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  };

  const telegramPdfBotLink = isMobile()
    ? "tg://resolve?domain=pdf_con_bot"
    : "https://web.telegram.org/a/#7970400236";

  const telegramEmailBotLink = isMobile()
    ? "tg://resolve?domain=email_chatbot"
    : "https://web.telegram.org/a/#5446888298";

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Road Traffic Prediction"
              description="A machine learning system that predicts traffic patterns using historical data and external factors like weather and time of day. Implemented using Random Forest Algorithm and Numpy for preprocessing."
              ghLink="https://github.com/selvaganesh19/Road-Traffic-Prediction-using-Machine-Learning"
              demoLink="https://colab.research.google.com/drive/1JCDM_P4jPjeyWWx2MQOrj0jsPwpyk4p_?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ev}
              isBlog={false}
              title="EV Battery Management System"
              description="Developed a Deep Learning-based Electric Vehicle Battery Management System for smart monitoring and optimization. Uses neural networks to analyze charging patterns and detect anomalies."
              ghLink="https://github.com/selvaganesh19/EV-Battery-Management-System-using-Deep-Learning"
              demoLink="https://colab.research.google.com/drive/1RYs28Af6R3aTXynstC9fEWn8zzOkOdc1?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game2048}
              isBlog={false}
              title="2048 Game (JavaScript)"
              description="A JavaScript-based implementation of the popular 2048 puzzle game. Users slide number tiles to combine and reach the target 2048 score. Includes logical gameplay and interactive UI."
              ghLink="https://github.com/selvaganesh19/2048-game-using-Java-script"
              demoLink="https://my-2048-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfBot}
              isBlog={false}
              title="PDF File Converter Telegram Bot"
              description="A Telegram bot that converts and manipulates PDF files — PDF to Word, Word to PDF, split, merge, reorder pages, compress, image to PDF, and more. Hosted on Railway with full mobile support."
              ghLink="https://github.com/selvaganesh19/PDF-file-converter-bot/tree/main"
              demoLink={telegramPdfBotLink}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailBot}
              isBlog={false}
              title="AI-Based Email Generator Telegram Bot"
              description="An AI-powered Telegram bot that helps users generate, preview, schedule, and send emails with attachments using Cohere AI and Gmail API. Features include tone selection, reminders, role-based content, and name personalization."
              ghLink="https://github.com/selvaganesh19/AI-Based-Email-Generator-TBot/tree/main"
              demoLink={telegramEmailBotLink}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
