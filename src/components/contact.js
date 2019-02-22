import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container className="contact-grid" fluid={true}>
          <div className="contact-background">
            <div className="contact-header">
              <h1>Contact Me</h1>
            </div>
            <Row col={12} className="contact-cell" noGutters={true}>
              <Col xs={12} md={12} lg={12}>
                <Row col={12} />

                <div className="contact-links">
                  <a href="https://github.com/johnmurph27">
                    <i className="fab fa-github fa-3x" />
                  </a>
                  <a href="mailto:jomu8186@colorado.edu">
                    <i className="fas fa-envelope fa-3x" />
                  </a>
                  <a href="https://www.linkedin.com/in/john-murphy-162ba711b/">
                    <i className="fab fa-linkedin fa-3x" />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Contact;
