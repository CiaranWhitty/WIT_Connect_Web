import { React, useState, useEffect } from "react";
import { Header, Icon, Segment, Label } from "semantic-ui-react";
import FilterControls from "../components/filterControls";
import StudentsList from "../components/studentsComponents/studentsList";
import app from "../firebase/firebase";

const Students = ({ action }) => {
  const [userList, setUserList] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

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
          userList
            .filter((user) => user.userEmail)
            .filter((user) => user.publicAccount === true)
            .filter((user) => user.allowEmployers === true)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  let displayedStudents = userList.filter((s) => {
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
          Search Students
        </Header>

        <FilterControls
          onUserInput={handleChange}
          numStudents={displayedStudents.length}
        />
        <Label id="totalStudentNum" color="blue">
          Number Of Students: {displayedStudents.length}
        </Label>
      </Segment>

      <StudentsList action={action} students={displayedStudents} />
    </>
  );
};

export default Students;
