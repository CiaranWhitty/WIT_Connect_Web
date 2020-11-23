import React from "react";
import WITMaps from '../components/witMaps'
import Timetable from '../components/WITTimetable'

import { Container } from 'semantic-ui-react'


const mapPage = () => {

  return (
    <>

      <Container fluid>

        <WITMaps />

        <Timetable/>

      </Container>

    </>
  );
};

export default mapPage;
