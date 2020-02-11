import React from "react";
import TeamMember from "./member";
import { Grid } from "@material-ui/core";
import classes from "./index.module.scss";

const index = () => {
  return (
    <div className={classes.team}>
      <h2 className={classes.hero_head}>
        People <span>Behind</span> the Wheel
      </h2>
      <p className={classes.hero_content}>
        At sessions that span from the technical to the visionary, let’s
        celebrate and discover what the technologies can enable: how product
        innovation, open source, and ML and AI can propel enterprises forward
        and solve the big problems that impact all of us.
      </p>
      {/* <Grid container className={classes.team_list} spacing={5}>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
      </Grid> */}
      <div className={classes.team_list}>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </div>
  );
};

export default index;
