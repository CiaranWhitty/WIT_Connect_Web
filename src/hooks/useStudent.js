import { useEffect, useState } from "react";
import app from "../firebase/firebase";

const useStudent = (uId) => {
  const [student, setStudent] = useState([]);

  useEffect(
    () => {
      const userRef = app.database().ref("Users");
      userRef.on("value", (snapshot) => {
        const users = snapshot.val();
        const student = [];
        for (let id in users) {
          student.push({ id, ...users[id] });
        }

        setStudent(student.filter((user) => user.uId === uId));
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  // console.log(student);

  return [student, setStudent];
};

export default useStudent;
