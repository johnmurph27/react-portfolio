import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class ResumeItem extends Component {
  state = {
    title: this.props.item.title,
    subtitle: this.props.item.subTitle,
    details: this.props.item.details,
    date: this.props.item.date
  };

  parseDetails = () => {
    var detailArray = this.state.details.split("|");
    const detailItems = detailArray.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return detailItems;
  };

  render() {
    const list = this.parseDetails();
    return (
      <div className="resumeItem">
        <Grid className="resume-grid">
          <Cell col={6} className="resume-title">
            <h4>{this.state.title}</h4>
          </Cell>
          <Cell col={6} className="resume-date">
            <p>{this.state.date}</p>
          </Cell>
          <Cell col={12} className="resume-details">
            <h5>{this.state.subtitle}</h5>
            <ul className="resume-list"> {list}</ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ResumeItem;
