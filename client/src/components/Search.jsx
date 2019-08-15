import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

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
        <Typography variant="h6">Check Live YouTube Stats</Typography>
        <form
          onChange={e => {
            this.setState({ entry: e.target.value });
          }}
        >
          <TextField
            type="text"
            placeholder="Type Any YouTuber"
            id="outlined-full-width"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <Grid container justify="center" alignItems="center">
            <Button
            variant="contained"
              onClick={e => {
                e.preventDefault();
                this.props.handleSearchedYoutuber(this.state.entry);
              }}
            >
              Check
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Search;
