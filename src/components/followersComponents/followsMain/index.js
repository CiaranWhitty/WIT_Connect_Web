import React, { useState, useEffect } from "react";
import { Header, Icon, Segment, Label } from "semantic-ui-react";
import app from "../../../firebase/firebase";
import FilterControls from "../../filterControls";

import Follows from "../follows";
import "./followsMain.css";

export default function FollowsMain({ studentuId }) {
  const [followList, setfollowList] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(
    () => {
      const followRef = app.database().ref("Follows");
      const onlyStudents = studentuId + "@mail.wit.ie";

      followRef.on("value", (snapshot) => {
        const follows = snapshot.val();
        const followList = [];
        for (let id in follows) {
          followList.push({ id, ...follows[id] });
        }

        setfollowList(
          followList.filter((follows) => follows.student === onlyStudents)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  console.log(followList);

  let displayedFollows = followList.filter((s) => {
    return (
      s.studentFollowedEmail.toLowerCase().search(nameFilter.toLowerCase()) !==
      -1
    );
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      {" "}
      <div className="followers">
        <Segment placeholder>
          <Header icon dividing>
            <Icon name="user outline" />
            Search followers
          </Header>

          <FilterControls
            onUserInput={handleChange}
            numFollows={displayedFollows.length}
          />
          <Label id="totalStudentNum" color="blue">
            Number Of followers: {displayedFollows.length}
          </Label>
        </Segment>
        <Follows followList={displayedFollows} />{" "}
      </div>
    </>
  );
}
