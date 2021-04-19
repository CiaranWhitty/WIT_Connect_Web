import { React, useState, useEffect } from "react";
import { Header, Icon, Segment, Label } from "semantic-ui-react";
import FilterControls from "../components/filterControls";
import EmployersList from "../components/employersComponents/employersList";
import app from "../firebase/firebase";

const Employers = ({ action }) => {
  const [employerList, setEmployerList] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(
    () => {
      const employerRef = app.database().ref("Employers");
      employerRef.on("value", (snapshot) => {
        const Employers = snapshot.val();
        const employerList = [];
        for (let id in Employers) {
          employerList.push({ id, ...Employers[id] });
        }
        setEmployerList(
          employerList
            .filter((employer) => employer.userEmail)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  let displayedEmployers = employerList.filter((s) => {
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
          Search Employers
        </Header>

        <FilterControls
          onUserInput={handleChange}
          numEmployers={displayedEmployers.length}
        />
        <Label id="totalStudentNum" color="blue">
          Number Of Employers: {displayedEmployers.length}
        </Label>
      </Segment>

      <EmployersList action={action} employers={displayedEmployers} />
    </>
  );
};

export default Employers;
