function fetch(url) {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        fullName: "Ron Perris",
        avatar: "https://github.com/ronperris.jpg",
        twitterURL: " javascript:alert(1)",
        facebookURL: "https://facebook.com/ronperris",
        instagramURL: "https://instagram.com/ronperris"
      })
  });
}

export default fetch;
