import React, { useState, useEffect } from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import app from "../../../firebase/firebase";
import FilterControls from "../../filterControls";

import Mentors from "../mentors";
import "./mentorsMain.css";

export default function MentorsMain() {
  const [mentorList, setmentorList] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(
    () => {
      const mentorRef = app.database().ref("Mentors");

      mentorRef.on("value", (snapshot) => {
        const Mentors = snapshot.val();
        const mentorList = [];
        for (let id in Mentors) {
          mentorList.push({ id, ...Mentors[id] });
        }

        setmentorList(mentorList.filter((mentor) => mentor.mId));
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  let displayedMentors = mentorList.filter((s) => {
    return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Segment placeholder>
        <Header icon dividing>
          <Icon name="user plus" />
          Search Mentors
        </Header>

        <FilterControls
          onUserInput={handleChange}
          numMentors={displayedMentors.length}
        />
        {/* <Label id="totalStudentNum" color="blue">
          Number Of Mentors: {displayedMentors.length}
        </Label> */}
        <h4 id="witP2PLink">
          You can find out more information{" "}
          <a
            href="https://www.wit.ie/current_students/student_life_and_learning/p2p-peer-mentoring"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </h4>
      </Segment>

      <Mentors mentorList={displayedMentors} />
    </>
  );
}
