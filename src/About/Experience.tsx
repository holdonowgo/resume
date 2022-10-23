import type { AExperience } from "../Main";

const sampleStyle = {
  color: "#4a54f1",
  fontStyle: "italic",
  fontweight: "bold",
}
const notesStyle = {
  color: "#BF2D53",
  fontStyle: "italic",
  fontweight: "bold",
}

const list = [
  `Was lead engineer in the development of in-house customer support tooling, responsible for architecture, and implementation.`,
  `Tooling was built with Vue, TypeScript, and Node.js. The team's work was recognized by the company's leadership and was featured in a company-wide newsletter.`
]

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
            <p style={sampleStyle} className="css-fix">{`SAMPLE: [${ex.summary_0}]`}</p>
            <br/>
            <p style={notesStyle} className="css-fix">{`This block should be a short summary here similar to the sample above.  Use your bullet points below and then edit them again.  I need to find a balance between the bullets and the summary.`}</p>
            <br/>
            <ul>
              {ex.summary_1.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
