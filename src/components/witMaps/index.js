import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import "./witMaps.css";

import * as buildingData from "./WITBuildingData.json";

function Map(){
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  var location = {lat: 52.245807, lng: -7.138853};

  return (
    
    <GoogleMap

      defaultZoom={17} //18
      defaultCenter={location}
      clickableIcons={false}
      
      disableDefaultUI={true}
      fullscreenControl={false}

      >

        {buildingData.wit.map(building => (

          <Marker
              key={building.building_Name}
              position={{
                lat: building.center[0],
                lng: building.center[1]

              }}

              // icon={{
              //   path: 'M2 2 H 100 V 60 H 2 L 2 2',
              //   fillColor: 'white',
              //   fillOpacity: 0,
              //   strokeColor: '#000',
              //   strokeWeight: 1,
                
              // }}

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
    <div className="MapContainer" >
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_googleMaps_KEY}`}
        loadingElement={<div style={{ height: "100%"}}/>}
        containerElement={<div style={{ height: "100%"}}/>}
        mapElement={<div style={{ height: "100%"}}/>}
      />
    </div>
  );
};

