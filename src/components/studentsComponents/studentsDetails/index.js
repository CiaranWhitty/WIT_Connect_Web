import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import { useAuth } from "../../../contexts/AuthContext";
import app from "../../../firebase/firebase";
import date from "date-and-time";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";
import "./studentsDetails.css";

const Student = ({ student, studentuId }) => {
  const { currentUser } = useAuth();

  const now = new Date();
  const creationDate = date.format(now, "ddd, MMM DD YYYY");

  const addFollower = () => {
    const studentAdding = currentUser.email;
    const studentBeingAdded = studentuId + "@mail.wit.ie";
    console.log(currentUser.email + " Now Following " + studentBeingAdded);
    const createFollow = () => {
      const followRef = app.database().ref("Follows");

      const student = studentAdding;
      const addDate = creationDate;
      const studentFollowedEmail = studentBeingAdded;
      const studentFollowedId = studentuId;
      // let studentAdd = [{ studentE, addDate }];

      const follower = {
        addDate,
        student,
        studentFollowedEmail,
        studentFollowedId,
        // studentAdd,
      };

      followRef.push(follower);
    };
    createFollow();
    // window.alert(currentUser.email + " Now Following " + studentBeingAdded);
  };

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
                          <a onClick={addFollower} href={""}>
                            Follow
                            <Icon name="add" size="big" />
                          </a>
                        </li>
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
