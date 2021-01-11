import React from "react";
import WITMaps from '../components/witMaps'
import Timetable from '../components/WITTimetable'
import { useAuth } from "../contexts/AuthContext";

import { Container, Segment } from 'semantic-ui-react'

export default function MapPage() {
 
  const context = useAuth();
  
  return context.isAuthenticated ? (
    
  //When logged in
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

  ) : (

  //When logged out
    <Container fluid>
              
      <Segment.Group>
        <Segment>
          <WITMaps />
        </Segment>
      </Segment.Group>

    </Container>
    
  );
};