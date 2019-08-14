import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import YoutuberDescription from "./components/YoutuberDescription.jsx";
import Search from "./components/Search.jsx";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      thumbnail: "",
      subscriberCount: "",
      videoCount: "",
      customUrl: ""
    };
    this.handleSearchedYoutuber = this.handleSearchedYoutuber.bind(this);
  }

  componentDidMount() {
    axios
      .get("/getYoutuberData", {
        params: { username: "ricegum" }
      })
      .then(data => {
        console.log(data.data[0]);
        this.setState({
          username: data.data[0].snippet.title,
          thumbnail: data.data[0].snippet.thumbnails.default.url,
          subscriberCount: data.data[0].statistics.subscriberCount,
          videoCount: data.data[0].statistics.videoCount,
          customUrl: data.data[0].snippet.customUrl
        });
      })
      .catch(err => {
        console.log(err);
      });

    // setInterval(() => {
    //   console.log(this.state);
    //   axios
    //     .get("/getYoutuberData", {
    //       params: { username: this.state.customUrl }
    //     })
    //     .then(data => {
    //       console.log(data.data[0]);
    //       this.setState({
    //         username: data.data[0].snippet.title,
    //         thumbnail: data.data[0].snippet.thumbnails.default.url,
    //         subscriberCount: data.data[0].statistics.subscriberCount,
    //         videoCount: data.data[0].statistics.videoCount
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }, 10000);
  }

  handleSearchedYoutuber(entry) {
    axios
      .get("/getYoutuberData", {
        params: { username: entry }
      })
      .then(data => {
        this.setState({
          username: data.data[0].snippet.title,
          thumbnail: data.data[0].snippet.thumbnails.default.url,
          subscriberCount: data.data[0].statistics.subscriberCount,
          videoCount: data.data[0].statistics.videoCount,
          customUrl: entry
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <div>
          <YoutuberDescription
            username={this.state.username}
            thumbnail={this.state.thumbnail}
            subscriberCount={this.state.subscriberCount}
            videoCount={this.state.videoCount}
          />
          <Search handleSearchedYoutuber={this.handleSearchedYoutuber} />
        </div>
      </Grid>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Kevin" />, mountNode);
