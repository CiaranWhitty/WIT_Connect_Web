import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const offCampus = () => {
  return (
    <>
        <h1>Off Campus</h1>
        <Card.Group stackable centered itemsPerRow={3}>
          <Card>
            <Image
              src="https://res.cloudinary.com/a20085909/image/upload/v1619453510/HSELogo_v2ggwh.svg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Waterford university hospital</Card.Header>
              <Card.Description></Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://www.hse.ie/eng/"
                target="_blank"
                rel="noreferrer"
              >
                HSE Website
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image
              src="https://res.cloudinary.com/a20085909/image/upload/v1619453511/SamaritansLogo_iploss.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Samaritans </Card.Header>
              <Card.Description></Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://www.samaritans.org/"
                target="_blank"
                rel="noreferrer"
              >
                Samaritans Website
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image
              src="https://res.cloudinary.com/a20085909/image/upload/v1619453510/PietaLogo_f2rfg8.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Peita House South East</Card.Header>
              <Card.Description></Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://www.pieta.ie/" target="_blank" rel="noreferrer">
                Peita Website
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
    </>
  );
};

export default offCampus;
