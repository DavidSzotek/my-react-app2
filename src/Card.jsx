import profilePic from "./assets/profile_pic.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">David Szotek</h2>
      <p className="card-text">I am trying to get job as a developer</p>
    </div>
  );
}

export default Card;
