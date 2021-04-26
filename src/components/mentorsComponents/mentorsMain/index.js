import React, { useState, useEffect } from "react";
import { Header, Icon, Segment, Label } from "semantic-ui-react";
import app from "../../../firebase/firebase";
import FilterControls from "../../filterControls";

import Mentors from "../mentors";

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
          <Icon name="users" />
          Search Mentors
        </Header>

        <FilterControls
          onUserInput={handleChange}
          numMentors={displayedMentors.length}
        />
        {/* <Label id="totalStudentNum" color="blue">
          Number Of Mentors: {displayedMentors.length}
        </Label> */}
      </Segment>

      <Mentors mentorList={displayedMentors} />
    </>
  );
}
