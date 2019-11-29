import React from "react";

class Link extends React.Component {
  isSafe(dangerousURL) {
    if (dangerousURL.match(/^javascript:/)) return false;
    return true;
  }

  render() {
    const url = this.props.url;
    const safeURL = this.isSafe(url) ? url : null;
    return <a href={safeURL}>{this.props.text}</a>;
  }
}

export default Link;
