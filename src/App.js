import fetch from "./fake-fetch";
import React from "react";
import "./App.css";
import Profile from "./Profile";

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch("/profile");
    const json = await response.json();

    this.setState({
      name: json.fullName,
      avatar: json.avatar,
      twitter: json.twitterURL,
      facebook: json.facebookURL,
      instagram: json.instagramURL
    });
  }

  render() {
    return (
      <div className="App">
        {this.state && (
          <Profile
            name={this.state.name}
            avatar={this.state.avatar}
            twitter={this.state.twitter}
            facebook={this.state.facebook}
            instagram={this.state.instagram}
          />
        )}
      </div>
    );
  }
}

export default App;
