import React from "react";
import SContactInfo from "./SContactInfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";
import SProfileText from "./SProfileText";

const Sidebar = ({ Data }) => {
  return (
    <div className="left_Side">
      <SProfileText Profile={Data.Profile} />
      <SContactInfo ContactInfo={Data.ContactInfo} />
      <SEducation Education={Data.Education} />
      <SLanguage Languages={Data.Languages} />
    </div>
  );
};

export default Sidebar;
