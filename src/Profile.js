import React from "react";

function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img alt="user avatar" src={props.avatar} />
      <a href={props.twitter}>Twitter</a>
      <a href={props.facebook}>Facebook</a>
      <a href={props.instagram}>Instagram</a>
    </div>
  );
}

export default Profile;
