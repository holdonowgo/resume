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
    text0: `I am an Engineering Manager with 10+ years of IC experience at the intersection of distributed systems and software. I'm passionate about leveraging my experience to set up technical teams for success.`,
    text1: `I am an Engineer with 15+ years of experience designing, developing, and implementing software as well as delivering continued documentation, maintenance and end-user training. I'm passionate about leveraging my experience to deliver high-quality software solutions.`,
  };
  const experience: AExperience[] = [
    {
      year: "2020 - August 2022",
      company: "Seasoned 2.0",
      role: "Software Engineer, Full Stack",
      summary_0: `Lead an OpenShift Engineering team's people and strategy, growing a small ad-hoc group into a 12 person cross-functional team. Our component bridges the Red Hat Enterprise Linux Container Operator System (RHCOS) with Red Hat's Kubernetes application platform (OpenShift).
 
      The team’s stability wins transformed releases from a last-minute nailbiter to a routine event. The team's flexibility and future-thinking design unblocked our customer pipeline and empowered engineers to code less, engineer more.
      `,
      summary_1: [`Was lead engineer in the development of in-house customer support tooling, responsible for architecture, and implementation.`,

      `Tooling was built with Vue, TypeScript, and Node.js. The team's work was recognized by the company's leadership and was featured in a company-wide newsletter.`,

      `Tooling features include: user account activity monitoring with notifications of misbehavior on the platform.  Monitored activity includes direct and community messaging within the app, job application and interview activity.`,

      `Tooling also includes a customer support dashboard, which allows support engineers to view and manage member and customer accounts, and multiple bulk actions to support the customer support team such as account deactivation, account reactivation, and account deletion.`,

      `Tooling is built on a Vue/Vuex frontend with TypeScript, and communicates with multiple Node.js microservices via REST & GraphQL as well as an OpenJPA REST application. The web app is deployed on S3.`,

      `The features transformed customer account triage and policing of ToS violations from being multi-step operations across multiple dashboards to a single routine event with the tooling 
      allowing bulk customer onboarding, store admin account creation/deletion and job posting creation/deletion/update.  This resulted in a 10x improvement in customer support efficiency, and a 5x improvement in customer satisfaction.`,

      `Worked directly with our Support Team to develop a customer support dashboard, which allows support engineers to view and manage member and customer accounts, and multiple bulk actions to support the customer support team such as account deactivation, account reactivation, and account deletion.`,

      `Created and maintained documentation for support tool engineering, including demos of new features, UI changes and triage playbooks walkthroughs.
      The documentation is stored in Notion and is used by the support team to onboard new members, and to provide a reference for the team's processes and procedures.`,
      
      `Support Tooling
      VueJS
      Vuex
      TypeScript
      Documentation`],
    },
    {
      year: "2017 - 2020",
      company: "Seasoned",
      role: "Software Engineer, Full Stack",
      summary_0: `I was the team and technical lead on a range of projects in collaboration with Product Management, including designing and implementing a complex subscription billing and invoicing workflow, a provisionable product catalog, multiple tiers of customer support, a marketing automation pipeline, and overall entitlement strategy. During my tenure, we transformed from a 50 person company with ~$10M in revenue to a ~500 person company with a valuation of over $1B. Worked primarily in Python or Go, using Cassandra, Redis and MySQL.
 
      Our self-service tooling and automation facilitated the transition from a monolith to dozens of microservices (from Chef/Twistd Python to Docker/Kubernetes/Go). We migrated from our original datacenter to a Google Cloud Platform presence.
      `,
      summary_1: [`Onboarded and mentored 3 interns 2 junior developers.  I was responsible for the interns' technical training, and for their technical and professional development.`,
      
     `Familiarized myself with the Segment API, and with the Segment Tracking Events protocol as well as the Segment Privacy Policy and Data Privacy protocols.  Collaborated with the Data Engineering team to integrate Segment Tracking Events into our Java backend.
      This allowed us to track user activity and behavior on the platform, and to provide a privacy policy to our customers.  This led us to better understand our users, and to better serve them.`,

      `Took part in the migration of our web application from Backbone to React/Redux, which allowed us to code less and engineer more, and to better create a consistent user experience across our web and mobile applications.`,

      `Worked with backend engineers to build and maintain our core Java application that interfaces with our database and multiple external APIs to provide a REST API for our web application.`,

      `Contributed to the building and maintenance of our React Native mobile applications for iOS and Android.
      `],
    },
    {
      year: "2007 - 2015",
      company: "Finkl Steel",
      role: "Software Engineer, Full Stack",
      summary_0: ``,
      summary_1: [`Took full ownership of all project lifecycles using agile methodologies; acted as project lead handling all phases of the software development process.`,

      `Built and maintained web-based employee expense reporting system processing over $11 million in expenses to date using C# ASP.NET and JS.`,
      
      `Architected, built and maintained WinForms application utilizing Entity Framework with an Oracle backend to manage the build of a brand new $200 million plant, organizing the development and tracking of 1000+ projects.`,
      
      `Collaborated to architect, build and maintain custom integrations into financial ERP system using C# with an Oracle backend extending purchasing, receiving, inventory functions, as well as exposing invoicing and payment data to executive management.`,
      
      `Wrote and maintained stored database procedures using PL/SQL and raw SQL queries to extract relevant data from all company business units, using it to create over 100 Crystal Reports made available company wide.`,
      
      `Worked closely with purchasing/receiving department to extended stores inventory management system used to handle ordering and issuing of plant-wide goods and materials, built with Visual Studio and WinForms.`,
      
      `Performed behavior driven and user acceptance testing of new software to quickly iterate on features.`,
      
      `Integrated PayPal webservices into ASP.NET website for partners to allow for purchasing of finished steel.`,

      `Led initiative with fellow engineer to implement TDD into the React/Redux web app using Jest, Enzyme, NYC, Sinon, Istanbul.
      `],
    },
  ];

  return (
    <div className="right_Side">
      <Profile profile={profile} />
      <Experience experience={experience} />
      {/* <Skills skills={skills} /> */}
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
