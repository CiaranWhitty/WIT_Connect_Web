import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const onCampus = () => {
  return (
    <>
        <h1>On Campus</h1>
        <Card.Group stackable centered itemsPerRow={3}>
          <Card>
            <Image
              src="https://www.wit.ie/images/uploads/Current_Students_Pics/Fr_david_keating.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Fr. David Keating, Institute Chaplain</Card.Header>
              <Card.Description>
                The Chaplain provides pastoral care for students and staff in
                WIT and responds to the personal needs of individual students on
                a day-to-day basis.
                <br /> <b>Room D 26, Cork Road campus</b>
                <br /> <b>Phone: (051) 302617</b>
                <br /> <b>Mobile (086) 3302086</b>
                <br /> <b>Home: (051) 378878</b>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://www.wit.ie/current_students/on_campus/chaplin"
                target="_blank"
                rel="noreferrer"
              >
                More Info - Source
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image
              src="https://www.wit.ie/images/uploads/Current_Students_Pics/Elma_Clancy.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Elma Clancy, Institute Nurse</Card.Header>
              <Card.Description>
                Students can book a free appointment with Nurse Elma by filling
                this form{" "}
                <a
                  href="https://www.cognitoforms.com/WIT8/InstituteNurseAppointmentRequest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Here</b>
                </a>
                . For any other queries on this service please email{" "}
                <a href={`mailto:institutenurse@wit.ie`}>
                  <b>institutenurse@wit.ie</b>
                </a>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://www.wit.ie/current_students/student_life_and_learning/wit_institute_nurse"
                target="_blank"
                rel="noreferrer"
              >
                More Info - Source
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image
              src="https://www.wit.ie/images/uploads/About_PDF/WITSU_LOGO_WHITE.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Students Union</Card.Header>
              <Card.Description>
                The Union actively seeks to prevent problems arising for
                students. It is both a strong lobbying and representative
                organisation working on behalf of the students of WIT. Your
                Union is only as strong as its members - so get involved from
                day one!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="http://witsu.ie/" target="_blank" rel="noreferrer">
                WITSU Website
              </a>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://www.wit.ie/current_students/on_campus/students_union"
                target="_blank"
                rel="noreferrer"
              >
                More Info - Source
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
    </>
  );
};

export default onCampus;
