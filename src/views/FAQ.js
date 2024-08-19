import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/FAQ.css";

const FAQ = () => {
  return (
    <div className="container text-center menu-container">
      <div className="call-to-action faq-cta">
        <p className="faq-title f">Frequently</p>
        <p className="faq-title a">Asked </p>
        <p className="faq-title q"> Questions</p>
      </div>
      <div className="faqs">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is your name?</Accordion.Header>
            <Accordion.Body>
              <p>I am Sir Galahad the Chaste.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is your quest?</Accordion.Header>
            <Accordion.Body>
              <p>I seek the Holy Grail.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is the airspeed velocity of an unladen swallow?
            </Accordion.Header>
            <Accordion.Body>
              <p>What do you mean? An African or European swallow?</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
