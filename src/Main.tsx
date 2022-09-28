import React from "react";
import Profile from "./About/Profile";
import Experience from "./About/Experience";
import Skills from "./About/Skills";

export type AProfile = {
  title: string;
  text0: string;
  text1: string;
};

export type AExperience = {
  year: string;
  company: string;
  role: string;
  summary: string;
};

export type ASkill = {
  skill: string;
  level: number;
};

const Main = () => {
  const profile: AProfile = {
    title: "Profile",
    text0: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    text1: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.`
  };
  const experience: AExperience[] = [
    {
      year: "2020 - Present",
      company: "Company Name",
      role: "Senior UX Developer",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      year: "2018 - 2020",
      company: "Company Name",
      role: "UX Developer",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      year: "2016 - 2018",
      company: "Company Name",
      role: "Junior UX Developer",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ];
  const skills: ASkill[] = [
    {
      skill: "HTML",
      level: 30
    },
    {
      skill: "CSS",
      level: 45
    },
    {
      skill: "JavaScript",
      level: 70
    },
    {
      skill: "Photoshop",
      level: 40
    },
    {
      skill: "Illustrator",
      level: 60
    },
    {
      skill: "Adobe XD",
      level: 70
    }
  ];

  return (
    <div className="right_Side">
      {/* <pre>{JSON.stringify({ Profile, Experience, Skills }, null, 2)}</pre> */}
      <Profile profile={profile} />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <div className="about interest">
        <h2 className="title2">Interests</h2>
        <ul>
          <li>
            <i className="fa fa-book" aria-hidden="true"></i> Reading
          </li>
          <li>
            <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
          </li>
          <li>
            <i className="fa fa-cutlery" aria-hidden="true"></i> Cooking
          </li>
          <li>
            <i className="fa fa-microphone" aria-hidden="true"></i> Singing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
