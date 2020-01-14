import React from "react";
import Card from "./Card";

const CardList = props => {
  const profiles = props.profiles;
  return (
    <div className="profiles-list">
      {profiles.map((profile, i) => (
        <Card {...profile} key={i} />
      ))}
    </div>
  );
};

export default CardList;
