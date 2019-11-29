import React from "react";

class Link extends React.Component {
  isSafe(dangerousURL) {
    const url = new URL(dangerousURL);
    if (url.protocol === "http:") return true;
    if (url.protocol === "https:") return true;
    return false;
  }

  render() {
    const url = this.props.url;
    const safeURL = this.isSafe(url) ? url : null;
    return <a href={safeURL}>{this.props.text}</a>;
  }
}

export default Link;
