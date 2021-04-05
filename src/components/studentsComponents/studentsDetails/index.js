import React from "react";
import { Segment } from "semantic-ui-react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";
import "./studentsDetails.css";

const student = ({ student }) => {
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
                      <img
                        alt="Profile_Image"
                        src="https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg"
                      />

                      <div key={student.id}>
                        {<h1>{student.name}</h1> || <h1>(Name)</h1>}
                        <h5>
                          {<small>{student.course}</small> || (
                            <small>(Course)</small>
                          )}
                        </h5>
                      </div>
                    </div>
                    <nav>
                      <ul>
                        {/* <li>
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillYoutube />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillTwitterCircle />
                          </a>
                        </li> */}
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
export default student;
