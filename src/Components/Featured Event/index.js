import React from "react";
import classes from "./index.module.scss";

const index = () => {
  return (
    <div className={classes.featured_content}>
      <p className={classes.date}>8/2/2020</p>
      <h2 className={classes.hero_head}>IWD Women Techmakers 2020</h2>
      <div className={classes.location}>
        <p className={classes.location_text}>
          National Incubation Center, Islamabad
        </p>
      </div>
      <p className={classes.hero_content}>
        GDG Islamabad is a local community-run meetup for developers interested
        in resources and technology from Google Developers. The community
        proudly holds an annual DevFest, Women Techmakers, and other events as
        part of its community building activities.
      </p>
    </div>
  );
};

export default index;
