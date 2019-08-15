import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

let Header = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}  style={{ margin: 10, paddingBottom: 20}}>
      <AppBar position="static" color="default" />
      <Toolbar>
        {" "}
        <img src="https://cdn.freebiesupply.com/logos/large/2x/amazon-analytics-logo-black-and-white.png" height="70" width="70"/>
       
      </Toolbar>
    </div>
  );
};

export default Header;
