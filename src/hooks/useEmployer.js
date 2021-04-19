import { useEffect, useState } from "react";
import app from "../firebase/firebase";

const useEmployers = (name) => {
  const [employer, setEmployerList] = useState([]);

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
          employerList.filter((employer) => employer.name === name)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return [employer, setEmployerList];
};

export default useEmployers;
