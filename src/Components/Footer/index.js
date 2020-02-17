import React from "react";
import Divider from "@material-ui/core/Divider";
import classes from "./index.module.scss";

const index = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_nav}>
        <h2 className={classes.footer_hero}>GDG Islamabad</h2>
        <a href="https://docs.google.com/document/d/1VPCF2_Affn4cp_nC5WA_rkUZrVmhqs9vGlre0tXtpXU/edit#heading=h.5mbzjti148z7">
          Code of Conduct
        </a>
        <p>Terms & Services</p>
        <p>Community Guidlines</p>
      </div>
    </footer>
  );
};

export default index;
