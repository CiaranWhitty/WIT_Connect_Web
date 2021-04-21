import React, { Component } from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import StudentsPortfoliosMain from "../../studentsPortfolioComponents/main/studentsPortfoliosMain";

import "./studentContent.css";

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
      <div className="studentContent">
        <Segment id="studentCon" basic size={"big"}>
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
              <StudentsPortfoliosMain
                year={"y1"}
                studentuId={this.props.studentuId}
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
              <StudentsPortfoliosMain
                year={"y2"}
                studentuId={this.props.studentuId}
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
              <StudentsPortfoliosMain
                year={"y3"}
                studentuId={this.props.studentuId}
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
              <StudentsPortfoliosMain
                year={"y4"}
                studentuId={this.props.studentuId}
              />
            </Accordion.Content>
            {/*  */}
          </Accordion>
        </Segment>
      </div>
    );
  }
}
