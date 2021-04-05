import React from "react";
import Up from "../up";

export default function Ups({ userList }) {
  return (
    <>
      {userList.map((user) => (
        <Up user={user} />
      ))}
    </>
  );
}
