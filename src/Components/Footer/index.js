import React from "react";
import Divider from "@material-ui/core/Divider";
import classes from "./index.module.scss";

const index = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <ul className={classes.links_list}>
          <li className={classes.links_primary}>About</li>
          <li className={classes.links_secondary}>GDG Islamabad</li>
          <li className={classes.links_secondary}>Google Developers Group</li>
          <li className={classes.links_secondary}>Women Techmakers</li>
        </ul>
        <ul className={classes.links_list}>
          <li className={classes.links_primary}>Resources</li>
          <li className={classes.links_secondary}>Become a Sponsor</li>
          <li className={classes.links_secondary}>Call for Speaker</li>
          <li className={classes.links_secondary}>Media Kit</li>
        </ul>
        <ul className={classes.links_list}>
          <li className={classes.links_primary}>Developer Console</li>
          <li className={classes.links_secondary}>Google API Console</li>
          <li className={classes.links_secondary}>GCP Console</li>
          <li className={classes.links_secondary}>Google Play Console</li>
        </ul>
      </div>
      <Divider />
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
