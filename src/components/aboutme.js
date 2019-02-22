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
                        JOJOJOJOJJJJJJ JJJJJJJ JJJJJJJ JJJJJJJ JJJJ JJJJJ JJJJJ
                        JJJJJJ JJJJ lk;ajsdf lkasjdf lkjasdl kfjasdf asldk fjas
                        lkdfja slkdjf
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
