import React from "react";
import Box from "../Layout/Box";
import { Grid } from "@material-ui/core";
import classes from "./index.module.scss";

const index = props => {
  return (
    <Grid xs={12} item md={4}>
      <Box className={classes.box}>
        <div className={classes.box_content}>
          <p className={classes.date}>{props.date}</p>
          <h2 className={classes.hero_head}>{props.title}</h2>
          <p className={classes.location_text}>{props.time}</p>
          <p className={classes.hero_content}>{props.location}</p>
          <a href={props.link} className={classes.learn_more}>
            See More
          </a>
        </div>
      </Box>
    </Grid>
  );
};

export default index;
