import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  siteMap: {
    color: "grey",
    size: "large",
    disableRipple: true
  }
}));

let Footer = props => {
  const classes = useStyles();
  return (
    <div style={{paddingTop: 200, paddingBottom: 200}}>
   

    </div>
  );
};

export default Footer;
