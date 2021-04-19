import React from "react";
import { Segment } from "semantic-ui-react";
import { AiOutlineMail } from "react-icons/ai";
import "./employersDetails.css";

const employers = ({ employer }) => {
  return (
    <>
      {employer.map((employer) => (
        <>
          <div className="student">
            <Segment.Group>
              <Segment>
                <div id="profileHeader">
                  <header>
                    <div>
                      <img alt={"employer_Image"} src={employer.img} />

                      <div key={employer.eid}>
                        {<h1>{employer.name}</h1> || <h1>(Name)</h1>}
                      </div>
                    </div>
                    <nav>
                      <ul>
                        <li>
                          <a href={`mailto:${employer.userEmail}`}>
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
export default employers;
