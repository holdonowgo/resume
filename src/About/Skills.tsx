import { ASkill } from "../Main";

const Skills = ({ skills }: { skills: ASkill[] }): any => {
  return (
    <div className="about skills">
      <h2 className="title2">Professionals skills</h2>
      {skills.map((skill) => (
        <div className="box" key={skill.skill}>
          <h4>{skill.skill}</h4>
          <div className="percent">
            <div style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
