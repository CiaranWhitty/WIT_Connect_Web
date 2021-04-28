import React from "react";
import { Segment, Icon } from "semantic-ui-react";

import {
  AiOutlineMail,
} from "react-icons/ai";
import "./studentsDetails.css";

const Student = ({ student }) => {

  return (
    <>
      {student.map((student) => (
        <>
          <div className="student">
            <Segment.Group>
              <Segment>
                <div id="profileHeader">
                  <header>
                    <div>
                      <img alt="Profile_Image" src={student.profileImage} />

                      <div key={student.id}>
                        {<h1 id="nameCap">{student.name}</h1> || (
                          <h1>(Name)</h1>
                        )}
                        <h5>
                          {<small>{student.course}</small> || (
                            <small>(Course)</small>
                          )}
                        </h5>
                      </div>
                    </div>
                    <nav>
                      <ul>
                        <li>
                          <a href={`mailto:${student.userEmail}`}>
                            <AiOutlineMail />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </header>
                </div>
              </Segment>
            </Segment.Group>
          </div>
        </>
      ))}
    </>
  );
};
export default Student;
