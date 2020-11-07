import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Rectangle, InfoWindow } from 'react-google-maps';
import { Popup } from 'semantic-ui-react';

import "./witMaps.css";

import * as buildingData from "./WITBuildingData.json";

function Map(){
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  var location = {lat: 52.245807, lng: -7.138853};
  

  return (
    
    <GoogleMap

      defaultZoom={17}
      defaultCenter={location}
      >

        {buildingData.wit.map(building => (
          <Rectangle
              key={building.building_Name}
              options={{
                strokeColor:"#FFFFFF00", 
                strokeOpabuilds: 0.8,
                strokeWeight:1,
                fillColor: "#FFFFFF00",
                fillOpacity:0.35       
              }}
              bounds={{
                north: building.north,
                south: building.south,
                east: building.east,
                west: building.west,
              }}
              onClick={() => {
                alert(building.building_Name);
                
              }}

              onMouseOver={() => {   
                console.log(building);

              }}

          />
        ))}


      </GoogleMap>




    



  );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{width:'90vw', height:'90vh'}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_googleMaps_KEY}`}
        loadingElement={<div style={{ height: "100%"}}/>}
        containerElement={<div style={{ height: "100%"}}/>}
        mapElement={<div style={{ height: "100%"}}/>}
      />
    </div>
  );
};

