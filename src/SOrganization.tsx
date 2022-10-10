import type { SOrganization } from "./Main";

const Organizations = ({ organization }: { organization: Array<SOrganization> }): any => {
  return (
    <div className="contactInfo organizations">
      <h3 className="title">Organizations</h3>
      <ul>
        {organization.map((org) => (
          <li key={org.Years}>
            <h5>{org.Years}</h5>
            <span className="icon">
              <i className={`fa fa-link`} aria-hidden="true"></i>
            </span>
            <span className="text">{org.Name}</span>
            {/* <span>{' '}</span> */}
            {/* <span className="years">{org.Years}</span> */}
            {/* <h4>{org.Name}</h4> */}
            <h4>{org.About}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Organizations;
