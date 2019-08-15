import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 90,
    height: 90
  },
  root: {
    width: "100%",
    maxWidth: 500
  },
  button: {
    background: "#c4302b"
  }
});

let YoutuberDescription = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Youtuber"
          src={props.thumbnail}
          className={classes.avatar}
        />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h6" style={{ paddingBottom: 10 }}>
          {props.username}
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h3" style={{ paddingTop: 10, paddingBottom: 10 }}>
          {props.subscriberCount}
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography
          variant="subtitle2"
          style={{ paddingBottom: 10 }}
        >
          YouTube Subscribers
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h5" style={{ paddingTop: 10 }}>
          {props.videoCount}
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="body2" style={{ paddingBottom: 10 }}>
          Videos
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            window.location.href = `https://www.youtube.com/user/${
              props.customUrl
            }/`;
          }}
        >
          Subscribe
        </Button>
      </Grid>
    </div>
  );
};

export default YoutuberDescription;
