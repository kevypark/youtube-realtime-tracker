import React from "react";
import YoutuberDescription from "./YoutuberDescription.jsx";
import Search from "./Search.jsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 300
  }
}));

let Display = props => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container justify="center" alignItems="center">
          <div>
            <YoutuberDescription
              username={props.username}
              thumbnail={props.thumbnail}
              subscriberCount={props.subscriberCount}
              videoCount={props.videoCount}
              customUrl={props.customUrl}
            />
          </div>
        </Grid>
      </Paper>
      <Grid container justify="center" alignItems="center">
        <Search handleSearchedYoutuber={props.handleSearchedYoutuber} />
      </Grid>
    </div>
  );
};

export default Display;
