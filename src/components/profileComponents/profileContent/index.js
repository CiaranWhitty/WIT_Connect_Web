import React, { Component } from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import PortfoliosForm from "../../portfolioComponents/portfolioForm";
import PortfoliosList from "../../portfolioComponents/portfolioMain";

import "./profileContent.css";

export default class ProfileAccordion extends Component {
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
          <Segment attached="top">
            <PortfoliosForm />
          </Segment>

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
              <PortfoliosList year={"y1"} />
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
              <PortfoliosList year={"y2"} />
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
              <PortfoliosList year={"y3"} />
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
              <PortfoliosList year={"y4"} />
            </Accordion.Content>
            {/*  */}
          </Accordion>
        </Segment>
      </div>
    );
  }
}
