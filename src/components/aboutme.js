import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

class Aboutme extends Component {
  render() {
    return (
      <div>
        <Row col={12} className="background" noGutters={true}>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
          >
            <Row col={12} className="aboutme-container" noGutters={true}>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
              >
                <div className="aboutme-cell">
                  <Row col={12} className="aboutme-title" noGutters={true}>
                    <Col
                      xs={{ span: 8, offset: 2 }}
                      md={{ span: 8, offset: 0 }}
                      lg={{ span: 8, offset: 0 }}
                    >
                      <h1>About Me</h1>
                    </Col>
                  </Row>
                  <Row col={12} className="aboutme-content" noGutters={true}>
                    <Col
                      xs={{ span: 4, offset: 4 }}
                      md={{ span: 2, offset: 0 }}
                      lg={{ span: 2, offset: 0 }}
                    >
                      <Image
                        src={require("../data/headshot.png")}
                        className="headshot-image"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      <p>
                        I am an alumni of the University of Colorado at Boulder
                        with a degree in computer science and minor in business.
                        I am currently looking for a full time position as a
                        software developer, I have experience in SQL, Java,
                        React, Python, PHP, and Javascript. I have always
                        enjoyed the collaborative aspect of computer science,
                        developing software, and solving problems.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Aboutme;
