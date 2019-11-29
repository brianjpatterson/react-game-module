import React from "react";
import escapeHtml from "escape-html";

function Profile(props) {
  console.log(escapeHtml);
  return (
    <div>
      <h2>{escapeHtml(props.name)}</h2>
      <img alt="user avatar" src={escapeHtml(props.avatar)} />
      <a href={escapeHtml(props.twitter)}>Twitter</a>
      <a href={escapeHtml(props.facebook)}>Facebook</a>
      <a href={escapeHtml(props.instagram)}>Instagram</a>
    </div>
  );
}

export default Profile;
