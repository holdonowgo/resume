import React from "react";

const SLanguage = ({ Languages }) => {
  return (
    <div className="contactInfo language">
      <h3 className="title">Languages</h3>
      <ul>
        {Languages.map((lang) => (
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
