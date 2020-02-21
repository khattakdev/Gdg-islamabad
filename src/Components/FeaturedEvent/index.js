import React from "react";
import classes from "./index.module.scss";
import { ReactComponent as LocationIcon } from "../../assets/marker.svg";
import SpeakPro from "../../assets/speak_pro.jpg";
import { Grid } from "@material-ui/core";
const index = () => {
  return (
    <Grid alignItems="center" className={classes.grid} container>
      <Grid className={classes.imgGrid} item sm={12} md={6}>
        <img className={classes.img} src={SpeakPro} />
      </Grid>
      <Grid item sm={12} md={6}>
        <div className={classes.featured_content}>
          <p className={classes.date}>21/03/2020</p>
          <h2 className={classes.hero_head}>IWD Women Techmakers 2020</h2>
          {/* <div className={classes.location}>
            <LocationIcon className={classes.location_icon} />
            <p className={classes.location_text}>
              National Incubation Center, Islamabad
            </p>
          </div> */}
          <p className={classes.hero_content}>
            GDG Islamabad team is trying its best to create a meaningful
            experience for everyone - we request everyone to show respect and
            courtesy to attendees/speakers/guests throughout the event. We have
            a code of conduct in place, please adhere to that so that you are
            clear to what is expected and you will be required to conform to the
            points mentioned in the Code of Conduct. Organisers will enforce
            this code throughout the event.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLErJYBogrcKlU2roW9H4M4HaQQh6mEfjujk06cti4E_iI7g/viewform"
            className={classes.learn_more}
          >
            Register Now
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default index;
