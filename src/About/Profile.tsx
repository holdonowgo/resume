import type { AProfile } from "../Main";

const Profile = ({ profile }: { profile: AProfile }): any => {
  return (
    <div className={`about ${profile?.title?.toLocaleLowerCase()}-sec`}>
      <h2 className="title2">{profile?.title}</h2>
      <p>{profile?.text0}</p>
      <br />
      <p>{profile?.text1}</p>
    </div>
  );
};

export default Profile;
