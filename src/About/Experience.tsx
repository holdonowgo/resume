import type { AExperience } from "../Main";

const Experience = ({ experience }: { experience: Array<AExperience> }): any => {
  return (
    <div className="about experience-sec">
      <h2 className="title2">Selected Experience</h2>
      {experience.map((ex) => (
        <div className="box" key={ex.year}>
          <div className="year_company">
            <h5>{ex.year}</h5>
            <h5>{ex.company}</h5>
          </div>
          <div className="text">
            <h4>{ex.role}</h4>
            <p className="css-fix">{ex.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
