import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="profile-pic" />
        <div className="info">
          <h3 className="name">{profile.name}</h3>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
