import React from "react";
//import { Segment } from 'semantic-ui-react'

import "./witTimetable.css";
import * as timetableData from "./WITTimetableData.json";


const timetable = () => {
  
  const listTT = timetableData.timetableCollection.map((tt) =>
  
      <div>
        <table id="ttTable">

          <tr>
            <td>{tt.day}</td>
          </tr>

          <tr>
            <th>Time</th>
            <th>Subject Title</th>
            <th>Type</th>
            <th>Dur</th>
            <th>Lecturer</th>
            <th>Room</th>
          </tr>
          {tt.times.map((sub)=>
            <tr>
            
              <td>{sub.Time}</td>
              <td>{sub.Subject}</td>
              <td>{sub.Type}</td>
              <td>{sub.Duration}</td>
              <td>{sub.Lecturer}</td>
              <td>{sub.Room}</td>

            </tr>
          )} 
          
          
        </table>
      </div>

  )
  return (
    <>

      <div className="timetableMainContainer">
      
        <div>
            { listTT }
        </div>

        {/* <div id="Table_SDD_Monday">
          <table>
            
            <tr>
              <td>Monday</td>
            </tr>

            <tr>
              <th>Time</th>
              <th>Subject Title</th>
              <th>Student Group</th>
              <th>Size</th>
              <th>Type</th>
              <th>Dur</th>
              <th>Lecturer</th>
              <th>Room</th>
            </tr>

            <tr id="SDD_W1_Mon_9">
              <td>09:15</td>
              <td>Data Structures & Algo</td>
              <td>kcomc_d2-W_W / kdevp_b2-W_W</td>
              <td>36</td>
              <td>L</td>
              <td>1</td>
              <td>Daly, Joseph A</td>
              <td>TLG21 AUD</td>
            </tr>
            
            <tr id="SDD_W1_Mon_10">
              <td>10:15</td>
              <td>Database Fundamentals</td>
              <td>kcomc_d2-W_W / kdevp_b2-W_W</td>
              <td>36</td>
              <td>L</td>
              <td>1</td>
              <td>Lyng, Mary</td>
              <td>FTG18</td>
            </tr>
            
            <tr id="SDD_W1_Mon_11">
              <td>11:15</td>
              <td>Database Fundamentals</td>
              <td>kcomc_d2-W_W1 / kdevp_b2-W_W1</td>
              <td>12</td>
              <td>P</td>
              <td>1</td>
              <td>Lyng, Mary</td>
              <td>IT120</td>
            </tr>
            
            <tr id="SDD_W1_Mon_12">
              <td>12:15</td>
              <td>Database Fundamentals</td>
              <td>kcomc_d2-W_W1 / kdevp_b2-W_W1</td>
              <td>12</td>
              <td>P</td>
              <td>1</td>
              <td>Lyng, Mary</td>
              <td>IT120</td>
            </tr>
            
            <tr id="SDD_W1_Mon_13">
              <td>13:15</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr id="SDD_W1_Mon_14">
              <td>14:15</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr id="SDD_W1_Mon_15">
              <td>15:15</td>
              <td>Data Structures & Algo</td>
              <td>kcomc_d2-W_W1 / kdevp_b2-W_W1</td>
              <td>12</td>
              <td>P</td>
              <td>1</td>
              <td>Daly, Joseph A</td>
              <td>IT119</td>
            </tr>
            
            <tr id="SDD_W1_Mon_16">
              <td>16:15</td>
              <td>Data Structures & Algo</td>
              <td>kcomc_d2-W_W1 / kdevp_b2-W_W1</td>
              <td>12</td>
              <td>P</td>
              <td>1</td>
              <td>Daly, Joseph A</td>
              <td>IT119</td>
            </tr>
            
            <tr id="SDD_W1_Mon_17">
              <td>17:15</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
          </table>
        </div> */}

      </div>

    </>



  );
};

export default timetable;
