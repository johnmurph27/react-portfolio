import React, { Component } from "react";
import ResumeItem from "./resumeItem";
import resumeData from "../data/resumeData";
import { Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <Row col={12} noGutters={true}>
        <Col
          xs={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
        >
          <div className="resume-container">
            <div id="header-education">
              <h1 className="header-text">Education</h1>
            </div>
            <ResumeItem item={resumeData.edcuationCU} />
            <ResumeItem item={resumeData.edcuationSpark} />
            <div id="header-experience">
              <h1 className="header-text">Experience</h1>
            </div>
            <ResumeItem item={resumeData.experienceCity} />
            <ResumeItem item={resumeData.experienceData} />
            <div id="header-leadership">
              <h1 className="header-text">Leadership</h1>
            </div>
            <ResumeItem item={resumeData.leadershipZayo} />
            <ResumeItem item={resumeData.leadershipKappa} />
          </div>
        </Col>
      </Row>
    );
  }
}
export default Resume;
