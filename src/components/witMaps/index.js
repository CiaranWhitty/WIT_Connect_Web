import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import "./witMaps.css";

import * as buildingData from "./WITBuildingData.json";

function Map(){
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  var location = {lat: 52.245807, lng: -7.138853};
  
  // const customMaker = {
  //   path:
  //     "M10,0.186c-3.427,0-6.204,2.778-6.204,6.204c0,5.471,6.204,6.806,6.204,13.424c0-6.618,6.204-7.953,6.204-13.424C16.204,2.964,13.427,0.186,10,0.186z M10,14.453c-0.66-1.125-1.462-2.076-2.219-2.974C6.36,9.797,5.239,8.469,5.239,6.39C5.239,3.764,7.374,1.63,10,1.63c2.625,0,4.761,2.135,4.761,4.761c0,2.078-1.121,3.407-2.541,5.089C11.462,12.377,10.66,13.328,10,14.453z",

  //   fillColor: null,
  //   fillOpacity: 0.8,
  //   scale: 2,
  //   strokeColor: "red",
  //   strokeWeight: 2,
  // };

  return (
    
    <GoogleMap

      defaultZoom={17} //18
      defaultCenter={location}
      clickableIcons={false}

      >

        {buildingData.wit.map(building => (
          
          // <Rectangle
          //     key={building.building_Name}
          //     options={{
          //       strokeColor:"#FFFFFF00", 
          //       strokeOpabuilds: 0.8,
          //       strokeWeight:1,
          //       fillColor: "#FFFFFF00",
          //       fillOpacity:0.35       
          //     }}
          //     bounds={{
          //       north: building.north,
          //       south: building.south,
          //       east: building.east,
          //       west: building.west,
          //     }}
          //     onClick={() => {
          //       alert(building.building_Name);
                
          //     }}

          //     onMouseOver={() => {   
          //       console.log(building);

          //     }}

          // />


          <Marker
              key={building.building_Name}
              position={{
                lat: building.center[0],
                lng: building.center[1]

              }}
              //icon= {customMaker}
              onClick={() => {
                //alert(building.building_Name);
                setSelectedBuilding(building);

              }}

          />

        ))}

        {selectedBuilding && (
          <InfoWindow
              position={{
                lat: selectedBuilding.center[0],
                lng: selectedBuilding.center[1]

              }}
              onCloseClick={() => {
                setSelectedBuilding(null);

              }}
              
            >

            <div>
              <h5>{selectedBuilding.building_Name}</h5>
              
              <table id="mapTable">
                <tr>
                  <th>Floor</th>
                  <th>Room's</th>
                </tr>

                <tr>
                  <td>G</td>
                  <td>{selectedBuilding.floor_G}</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>{selectedBuilding.floor_1}</td>
                </tr>
                
                <tr>
                  <td>2</td>
                  <td>{selectedBuilding.floor_2}</td>
                </tr>

              </table>

            </div>

            </InfoWindow>
        )}

      </GoogleMap>





  );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{width:'100vw', height:'85vh'}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_googleMaps_KEY}`}
        loadingElement={<div style={{ height: "100%"}}/>}
        containerElement={<div style={{ height: "100%"}}/>}
        mapElement={<div style={{ height: "100%"}}/>}
      />
    </div>
  );
};

