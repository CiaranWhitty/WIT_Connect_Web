import React from "react";
import { useAuth } from "../contexts/AuthContext";
import LoggedIn from "../components/HomePageComponents/LoggedIn";
import LoggedOut from "../components/HomePageComponents/LoggedOut";

const HomePage = () => {
  const context = useAuth();

  return context.isAuthenticated ? (
    //When logged in
    <>
      <LoggedIn />
    </>
  ) : (
    //When logged out
    <>
      <LoggedOut />
    </>
  );
};

export default HomePage;
