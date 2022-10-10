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

export type SOrganization = {
  Years: string;
  Name: string;
  About: string
};

export type ASkill = {
  skill: string;
  level: number;
};

const Main = () => {
  const profile: AProfile = {
    title: "Summary",
    text0: `I am an Engineering Manager with 10+ years of IC experience at the intersection of distributed systems and software. I'm passionate about leveraging my experience to set up technical teams for success.`,
    text1: `I am an Engineer with 15+ years of experience designing, developing, and implementing software as well as delivering continued documentation, maintenance and end-user training. I'm passionate about leveraging my experience to deliver high-quality software solutions.`,
  };
  const experience: AExperience[] = [
    {
      year: "November 2020 - August 2022",
      company: "Seasoned 2.0",
      role: "Software Engineer, Full Stack",
      summary: `Lead an OpenShift Engineering team's people and strategy, growing a small ad-hoc group into a 12 person cross-functional team. Our component bridges the Red Hat Enterprise Linux Container Operator System (RHCOS) with Red Hat's Kubernetes application platform (OpenShift).
 
      The team’s stability wins transformed releases from a last-minute nailbiter to a routine event. The team's flexibility and future-thinking design unblocked our customer pipeline and empowered engineers to code less, engineer more.

      Was lead engineer in the development of in-house customer suppport tooling, responsible for architecture, and implementation. I was also responsible for the team's people strategy, hiring, and mentoring.

      The tooling features include: user account activity monitoring with notifications of misbehavior on the platform.  Monitored activity includes direct and community messaging within the app, job application and interview activity.

      The tooling also includes a customer support dashboard, which allows support engineers to view and manage member and customer accounts, and multiple bulk actions to support the customer support team such as account deactivation, account reactivation, and account deletion.

      The tooling is built on a Vue/Vuex frontend with TypeScript, and communicates with multiple Node.js microservices as well as an OpenJPA Java application. The web app is deployed on S3.

      The features transformed customer account triage and policing of ToS violations from being multi-step operations across multiple dashboards to a single routine event with the tooling 
      allowing bulk customer onboarding, store admin account creation/deletion and job posting creation/deletion/update.  This resulted in a 10x improvement in customer support efficiency, and a 5x improvement in customer satisfaction.

      Worked directly with our Support Team to develop a customer support dashboard, which allows support engineers to view and manage member and customer accounts, and multiple bulk actions to support the customer support team such as account deactivation, account reactivation, and account deletion.

      Documentation is kept in a Notion wiki, and is updated as needed.  The documentation is used by the team to onboard new members, and to provide a reference for the team's processes and procedures.
      
      Support Tooling
      VueJS
      Vuex
      TypeScript
      Documentation`
    },
    {
      year: "2017 - 2020",
      company: "Seasoned",
      role: "Software Engineer, Full Stack",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.

      Intern Training/Mentorship
      Segment Tracking Events - Privacy Policy, Protocols, Data Privacy
      Introducing Testing - Jest, Enzyme, NYC
      Backbone to React/Redux
      React Native - Recompose
      Brushfire Java, OpenJPA
      
      Collaborated with the Data Engineering team to integrated Segment Tracking Events into our Java backend.  This allowed us to track user activity and behavior on the platform, and to provide a privacy policy to our customers.
      , which allowed us to track user activity and behavior within the application.  This allowed us to better understand our users, and to better serve them.
      Migrated our web application from Backbone to React/Redux, which allowed us to code less and engineer more, and to better create a consistent user experience across our web and mobile applications.
      `
    },
    {
      year: "2007 - 2015",
      company: "Finkl Steel",
      role: "Software Engineer, Full Stack",
      summary: `Took full ownership of all project lifecycles using agile methodologies; acted as project lead handling all phases of the software development process.

      Built and maintained web-based employee expense reporting system processing over $11 million in expenses to date using C#, JS.
      
      Architected, built and maintained WinForms application utilizing Entity Framework with an Oracle backend to manage the build of a brand new $200 million plant, organizing the development and tracking of 1000+ projects.
      
      Collaborated to architect, build and maintain custom integrations into financial ERP system using C# with an Oracle backend extending purchasing, receiving, inventory functions, as well as exposing invoicing and payment data to executive management.
      
      Wrote and maintained stored database procedures using PL/SQL and raw SQL queries to extract relevant data from all company business units, using it to create over 100 Crystal Reports made available company wide.
      
      Worked closely with purchasing/receiving department to extended stores inventory management system used to handle ordering and issuing of plant-wide goods and materials, built with Visual Studio and WinForms.
      
      Performed behavior driven and user acceptance testing of new software to quickly iterate on features.
      
      Integrated PayPal webservices into ASP.NET website for partners to allow for purchasing of finished steel.
      `
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
