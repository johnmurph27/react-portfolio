import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutme from "./aboutme";

class Landingpage extends Component {
  render() {
    return (
      <div>
        <Container className="landing-grid" fluid={true}>
          <div className="landing-cell-background">
            <Row col={12} className="landing-cell" noGutters={true}>
              <Col xs={12} md={12} lg={12}>
                <Row col={12} />

                <div className="banner-text">
                  <h1>John Murphy</h1>
                  <h3>Full Stack Developer</h3>
                  <h4>JavaScript | Java | PHP | SQL</h4>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Aboutme />
      </div>
    );
  }
}
export default Landingpage;
