import React from "react";
import Box from "../Layout/Box";
import classes from "./index.module.scss";

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
      <p className={classes.see_more}>See More</p>

      <div className={classes.events_list}>
        <Box>
          <div className={classes.box_content}>
            <p className={classes.date}>8/2/2020</p>
            <h2 className={classes.hero_head}>IWD Women Techmakers 2020</h2>
            <p className={classes.location_text}>Starts at 9:00 am</p>
            <p className={classes.hero_content}>
              Lovely Professional University, Islamabad
            </p>
            <a href="#" className={classes.learn_more}>
              See More
            </a>
          </div>
        </Box>
        <Box>
          <div className={classes.box_content}>
            <p className={classes.date}>8/2/2020</p>
            <h2 className={classes.hero_head}>IWD Women Techmakers 2020</h2>
            <p className={classes.location_text}>Starts at 9:00 am</p>
            <p className={classes.hero_content}>
              Lovely Professional University, Islamabad
            </p>
            <a href="#" className={classes.learn_more}>
              See More
            </a>
          </div>
        </Box>
        <Box>
          <div className={classes.box_content}>
            <p className={classes.date}>8/2/2020</p>
            <h2 className={classes.hero_head}>IWD Women Techmakers 2020</h2>
            <p className={classes.location_text}>Starts at 9:00 am</p>
            <p className={classes.hero_content}>
              Lovely Professional University, Islamabad
            </p>
            <a href="#" className={classes.learn_more}>
              See More
            </a>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default index;
