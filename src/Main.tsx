import Profile from "./About/Profile";
import Experience from "./About/Experience";

export type AProfile = {
  title: string;
  text0: string;
  text1: string;
};

export type AExperience = {
  year: string;
  company: string;
  role: string;
  summary_0: string;
  summary_1: string[];
};

export type SOrganization = {
  Years: string;
  Name: string;
  About: string;
};

export type ASkill = {
  skill: string;
  level: number;
};

const Main = () => {
  const profile: AProfile = {
    title: "Summary",
    text0: ``,
    text1: `I am an Engineer with 15+ years of experience designing, developing, and implementing software as well as delivering continued documentation, maintenance and end-user training. I'm passionate about leveraging my experience to deliver high-quality software solutions.`,
  };
  const experience: AExperience[] = [
    {
      year: "2020 - August 2022",
      company: "Seasoned 2.0",
      role: "Software Engineer, Full Stack",
      summary_0: ``,
      summary_1: [
        `Took ownership of the development of an in-house customer support tooling that was recognized by the company's leadership and regularly featured in a company newsletter.`,
        `The tooling features included user account activity monitoring, a customer support dashboard for support engineers to manage customer accounts, and multiple bulk actions to improve customer support efficiency.`,
        `The frontend was built using Vue/Vuex with TypeScript and communicated with multiple Node.js microservices and an OpenJPA REST application.`,
        `The features resulted in a 10x improvement in customer support efficiency and a 5x improvement in customer satisfaction.`,
        `I worked directly with the support team to develop the dashboard and maintained documentation for support tool engineering in Notion.`,
        `The features transformed customer account triage and ToS violation policing, resulting in a 10x improvement in customer support efficiency and a 5x improvement in customer satisfaction.`
      ],
    },
    {
      year: "2017 - 2020",
      company: "Seasoned",
      role: "Software Engineer, Full Stack",
      summary_0: ``,
      summary_1: [
        `Participated in onboarding and mentoring three interns and two junior developers, providing them with technical training and professional development.`,
        `I collaborated with the Data Engineering team, becoming familiar with the Twilio Segment API including track protocol, Segment Privacy Policy and Data Privacy protocols`,
        `Integrated Segment API into the company's Java backend & React frontend to track user activity and behavior and improve customer understanding and service.`,
        `Took part in migrating the company's web application from Backbone to React/Redux to improve coding efficiency and user experience across web and mobile applications.`,
        `Member of team responsible for building and maintaining the core Java application.`,
        `Member of team responsible for building and maintaining React web application.`,
        `Contributed to building and maintaining of React Native mobile applications for iOS and Android.`
      ],
    },
    {
      year: "2007 - 2015",
      company: "Finkl Steel",
      role: "Software Engineer, Full Stack",
      summary_0: ``,
      summary_1: [
        `In this position, I took ownership for the full project lifecycle using agile methodologies and acted as a project lead handling all phases of software development.`,
        `Built and maintained a web-based employee expense reporting system processing over $11 million in expenses using C# ASP.NET and JS.`,
        `Architected, built and maintained a WinForms application using Entity Framework with an Oracle backend to manage the build of a brand new $200 million plant.`,
        `Collaborated to architect, build, and maintain custom integrations into a financial ERP system using C# with an Oracle backend, extending purchasing, receiving, inventory functions, and exposing invoicing and payment data to executive management.`,
        `Wrote and maintained stored database procedures using PL/SQL and raw SQL queries, using it to create over 100 Crystal Reports made available company-wide.`,
        `Worked closely with the purchasing/receiving department to extend the stores inventory management system and integrated PayPal webservices into the ASP.NET website for partners to allow for purchasing of finished steel.`,
      ],
    },
  ];

  return (
    <div className="right_Side">
      <Profile profile={profile} />
      <Experience experience={experience} />
      <div className="about interest">
        <h2 className="title2">Interests</h2>
        <ul>
          <li>
            <i className="fa fa-book" aria-hidden="true"></i> History
          </li>
          <li>
            <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
          </li>
          <li>
            <i className="fa fa-cutlery" aria-hidden="true"></i> Cooking
          </li>
          <li>
            <i className="fa fa-trophy" aria-hidden="true"></i> Fencing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
