import React from "react";

type Language =
  {
    Name: string
    Level: number
  }

const SLanguage = ({ languages }: { languages: Array<Language> }) => {
  return (
    <div className="contactInfo language">
      <h3 className="title">Languages</h3>
      <ul>
        {languages.map((lang) => (
          <li key={lang.Name}>
            <span className="text">{lang.Name}</span>
            <span className="percent">
              <div
                // className={`${lang.Name.toLocaleLowerCase()}w${lang.Level}`}
                style={{ width: `${lang.Level}%` }}
              ></div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SLanguage;
