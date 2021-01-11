import React from "react";
import WITMaps from '../components/witMaps'
import Timetable from '../components/WITTimetable'

import { Container, Segment } from 'semantic-ui-react'


const mapPage = () => {

  return (
    <>

      <Container fluid>
      
        <Segment.Group>
          <Segment>
            <WITMaps />
          </Segment>
        </Segment.Group>
        
        <Segment.Group>
          <Segment>
            <Timetable/>
          </Segment>
        </Segment.Group>

      </Container>

    </>
  );
};

export default mapPage;
