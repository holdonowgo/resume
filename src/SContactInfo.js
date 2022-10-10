const SContactInfo = ({ ContactInfo }) => {
  return (
    <div className="contactInfo">
      <h3 className="title">Contact Info</h3>
      <ul>
        {ContactInfo.map((info) => (
          <li key={info.Icon}>
            <CallTo type={info.Type} text={info.Text}>
            <span className="icon">
              <i className={`fa fa-${info.Icon}`} aria-hidden="true"></i>
            </span>
            <span className="text">{info.Text}</span></CallTo>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SContactInfo;

const CallTo = ({ type, text, children }) => {
  switch (type) {
    case "phone":
      return <a className="call-to" href={`tel:${text}`}
        target="_blank"
        rel="noopener noreferrer">{children}</a>;
    case "email":
      return <a className="call-to" href={`mailto:${text}`}
        target="_blank"
        rel="noopener noreferrer">{children}</a>;
    case "url":
      return <a className="call-to" href={text}
        target="_blank"
        rel="noopener noreferrer">{children}</a>;
    case "location":
      return <a className="call-to" href={`https://www.google.com/maps/place/${text}`}
        target="_blank"
        rel="noopener noreferrer">{children}</a>;
    default:
      return
  };
}