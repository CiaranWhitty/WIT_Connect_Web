import React, { Component } from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import StudentsPortfoliosList from "../studentsPorfoliosMain";

import "./style.css";

export default class StudentsAccordion extends Component {
  state = { activeIndex: 99 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="profileContent">
        <Segment id="portfolioCon" basic size={"big"}>
          <Accordion fluid styled>
            {/*  */}
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              First Year
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <StudentsPortfoliosList
                year={"y1"}
                studentEmail={this.props.studentEmail}
              />
            </Accordion.Content>
            {/*  */}
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Second Year
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <StudentsPortfoliosList
                year={"y2"}
                studentEmail={this.props.studentEmail}
              />
            </Accordion.Content>
            {/*  */}
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Third Year
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <StudentsPortfoliosList
                year={"y3"}
                studentEmail={this.props.studentEmail}
              />
            </Accordion.Content>
            {/*  */}
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Fourth Year
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              {" "}
              <StudentsPortfoliosList
                year={"y4"}
                studentEmail={this.props.studentEmail}
              />
            </Accordion.Content>
            {/*  */}
          </Accordion>
        </Segment>
      </div>
    );
  }
}
