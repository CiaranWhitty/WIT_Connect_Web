import React from "react";
import WITMaps from "../components/witMaps";
import Timetable from "../components/WITTimetable";
import { useAuth } from "../contexts/AuthContext";

export default function MapPage() {
  const context = useAuth();

  return context.isAuthenticated ? (
    //When logged in
    <>
    <div className="mapPage">
      <WITMaps />
      <Timetable />
    </div>
    </>
  ) : (
    //When logged out
    <>    
    <div className="mapPage">
      <WITMaps />
    </div>
    </>
  );
}
