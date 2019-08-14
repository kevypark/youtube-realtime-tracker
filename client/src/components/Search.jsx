import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: ""
    };
  }

  render() {
    return (
      <div>
        <h4>Check Live YouTube Stats</h4>
        <form
          onChange={e => {
            this.setState({ entry: e.target.value });
          }}
        >
          <input type="text" placeholder="Type Any YouTuber's Username" />
          <br />
          <button
            onClick={e => {
              e.preventDefault();
              console.log(this.state);
              this.props.handleSearchedYoutuber(this.state.entry);
            }}
          >
            Check
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
