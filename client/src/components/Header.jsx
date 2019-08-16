import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#80deea"
  },
  button: {
    color: "white",
    size: "medium"
  }
}));

let Header = props => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ margin: 0, paddingBottom: 40, borderRadius: 10 }}
    >
      <AppBar position="static" color="default" />
      <Toolbar>
        {" "}
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/amazon-analytics-logo-black-and-white.png"
          height="60"
          width="60"
          style={{ paddingTop: 30 }}
        />
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          style={{ paddingTop: 38 }}
        >
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            Free Tools
          </Button>

          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            Services
          </Button>
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            Blog
          </Button>
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            Support
          </Button>
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            Login
          </Button>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Header;
