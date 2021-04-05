import React, { useState, useEffect } from "react";
import app from "../../../firebase/firebase";
import { useAuth } from "../../../contexts/AuthContext";

import Ups from "../ups";

export default function UpMain() {
  const [userList, setUserList] = useState([]);

  const { currentUser } = useAuth();
  const currentUserEmail = currentUser.email;

  useEffect(
    () => {
      const userRef = app.database().ref("Users");
      userRef.on("value", (snapshot) => {
        const users = snapshot.val();
        const userList = [];
        for (let id in users) {
          userList.push({ id, ...users[id] });
        }

        setUserList(
          userList.filter((user) => user.userEmail === currentUserEmail)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Ups userList={userList} />
    </>
  );
}
