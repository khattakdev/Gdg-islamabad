import React from "react";
import Box from "../Layout/Box";
import { Grid } from "@material-ui/core";
import classes from "./index.module.scss";
import Event from "./event";

const index = () => {
  return (
    <div className={classes.events}>
      <h2 className={classes.hero_head}>
        Our <span>Events</span> & <span>Meetups</span>
      </h2>
      <p className={classes.hero_content}>
        At sessions that span from the technical to the visionary, let’s
        celebrate and discover what the technologies can enable: how product
        innovation, open source, and ML and AI can propel enterprises forward
        and solve the big problems that impact all of us.
      </p>
      {/* <p className={classes.see_more}>See More</p> */}

      <Grid className={classes.events_list} container spacing={5}>
        <Event title="Flutter Viewing Party" date="18/2/2020" time="Tuesday, 3:30 PM - 6:30 PM" location="National Incubation Centre" link="https://www.facebook.com/events/516018519027560/" />
        <Event title="GDG Flagship Event: DevFest 2019" date="7/12/2019" time="Sat 10 AM" location="CIPS, NUST" link="https://www.facebook.com/events/930757323976445/" />
        <Event title="Flutter Study Jam 2019 Islamabad" date="15/10/2019" time="Tuesday, 3 - 6 PM" location="NUML" link="https://www.facebook.com/events/2456815961307134/" />
      </Grid>
    </div>
  );
};

export default index;
