import React from "react";
import classes from "./index.module.scss";
import Box from "../Layout/Box";
import TeamImg from "../../assets/team2.jpg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";

const member = props => {
  return (
    <Box className={classes.member}>
      <div className={classes.box}>
        {/* <img className={classes.box_img} src={TeamImg} alt="Team Member" /> */}
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className={classes.box_img}
        ></div>
        <h4 className={classes.box_head}>{props.name}</h4>
        <p className={classes.box_content}>{props.title}</p>
        <div className={classes.box_icons}>
          <a href={props.facebook}>
            <FacebookIcon className={classes.box_icon} />
          </a>
          <a href={props.twitter}>
            <TwitterIcon className={classes.box_icon} />
          </a>
          <a href={props.linkedin}>
            <LinkedinIcon className={classes.box_icon} />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default member;
