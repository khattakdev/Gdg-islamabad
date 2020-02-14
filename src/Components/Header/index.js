import React from "react";
import classes from "./index.module.scss";
import { Grid } from "@material-ui/core";
import { ReactComponent as HeadSvg } from "../../assets/celebrate_img.svg";
import { ReactComponent as Ownership } from "../../assets/ownership_img.svg";
import { ReactComponent as Honesty } from "../../assets/honesty_img.svg";
import { ReactComponent as Contentment } from "../../assets/contentment_img.svg";
import { ReactComponent as Growth } from "../../assets/growth_img.svg";
import { ReactComponent as Passion } from "../../assets/passion_img.svg";
const index = () => {
  return (
    <header className={classes.header}>
      <Grid alignItems="center" className={classes.grid} container spacing={3}>
        <Grid alignItems="center" justify="center" item xs={12} md={4}>
          <HeadSvg className={classes.svg} />
        </Grid>
        <Grid alignItems="center" item xs={12} md={7}>
          <h2 className={classes.hero_head}>
            Creating meaningful experiences for <span>Everyone</span>
          </h2>
          <p className={classes.hero_body}>
            GDG Islamabad is a local community for developers interested in
            resources and technology from Google Developers. The community
            proudly holds an annual DevFest, Women Techmakers, and other events
            as part of its community-building activities.
          </p>
          <div className={classes.hero_button}>
            <a href="#" className={classes.hero_button_learn}>
              Learn More
            </a>
            <a
              href="https://www.facebook.com/GDGIslamabad/"
              className={classes.hero_button_fb}
            >
              Facebook Page
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        alignItems="center"
        className={classes.bottom}
        container
        spacing={2}
      >
        <Grid className={classes.bottom_hero} item xs={12} md={4}>
          <h3 className={classes.bottom_top}>Core Values</h3>
          <p className={classes.bottom_body}>
            Google Developer Groups (GDGs) are for developers who are interested
            in Google's developer technology.
          </p>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid
            justify="center"
            container
            className={classes.core_icons}
            spacing={10}
          >
            <Grid item xs={4} md={2}>
              <Ownership className={classes.core_icon} />
              <p className={classes.core_icon_name}>Ownership</p>
            </Grid>
            <Grid item xs={4} md={2}>
              <Honesty className={classes.core_icon} />
              <p className={classes.core_icon_name}>Honesty</p>
            </Grid>
            <Grid item xs={4} md={2}>
              <Contentment className={classes.core_icon} />
              <p className={classes.core_icon_name}>Contentment</p>
            </Grid>
            <Grid item xs={4} md={2}>
              <Growth className={classes.core_icon} />
              <p className={classes.core_icon_name}>Growth</p>
            </Grid>
            <Grid item xs={4} md={2}>
              <Passion className={classes.core_icon} />
              <p className={classes.core_icon_name}>Passion</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </header>
  );
};

export default index;

// <Grid container spacing={3}>
// <Grid alignItems="center" item xs={12} sm={6}>
//
// </Grid>
// <Grid alignItems="center" xs={12} sm={6}>
//   <h2>
//     Create meaningful experiences for <span>Everyone</span>
//   </h2>
//   <p>
//     GDG Islamabad is a local community-run meetup for developers
//     interested in resources and technology from Google Developers. The
//     community proudly holds an annual DevFest, Women Techmakers, and
//     other events as part of its community-building activities.
//   </p>
// </Grid>
// </Grid>
