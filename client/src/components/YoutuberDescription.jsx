import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 90,
    height: 90
  },
  root: {
    width: "100%",
    maxWidth: 500
  }
});

let YoutuberDescription = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src={props.thumbnail}
        className={classes.avatar}
      />

      <Typography variant="h5">{props.username}</Typography>
      <Typography variant="h5">{props.subscriberCount}</Typography>
      <Typography variant="h5">{props.videoCount}</Typography>
    </div>
  );
};

export default YoutuberDescription;
