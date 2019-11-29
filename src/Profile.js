import React from "react";
import Link from "./Link";

function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img alt="user avatar" src={props.avatar} />
      <Link url={props.twitter} text="Twitter" />
      <Link url={props.facebook} text="Facebook" />
      <Link url={props.instagram} text="Instagram" />
    </div>
  );
}

export default Profile;
