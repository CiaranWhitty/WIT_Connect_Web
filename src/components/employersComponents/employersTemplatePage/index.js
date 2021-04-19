import React from "react";
import EmployersHeader from "../employersHeader";
import "./templateEmployersPage.css";

const TemplateEmployersPage = ({ children }) => {
  return (
    <>
      <EmployersHeader />

      <div id="EmployerChildren">{children}</div>
    </>
  );
};

export default TemplateEmployersPage;
