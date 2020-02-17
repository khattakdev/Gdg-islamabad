import React from "react";
import Box from "../Layout/Box";
import classes from "./index.module.scss";
import google from "../../assets/google.png";
import pwc from "../../assets/pwc.png";
import snp from "../../assets/snp.png";
import telenor from "../../assets/telenor.png";
import sg from "../../assets/sg.png";
import codepak from "../../assets/codepak.png";
import demo from "../../assets/demo.png";
import womenintech from "../../assets/womenintech.png";
import knct from "../../assets/knct.png";
import nic from "../../assets/nic.jpg";
import jazz from "../../assets/jazz.png";
import ministry from "../../assets/ministry.jpg";
import ignite from "../../assets/ignite.jpg";
import bentley from "../../assets/bentley.png";

const index = () => {
  return (
    <div className={classes.partners}>
      <h2 className={classes.hero_head}>
        Our <span>Partners</span>
      </h2>
      <p className={classes.hero_content}>
        A very big thank you to all our partners for their continued partnership
      </p>
      <p className={classes.hero_content}>
        If you are interested in being showcased throughout, contact{" "}
        <span>gdgislamabad@gmail.com</span> to discuss sponsorship
        opportunities.
      </p>

      <div className={classes.partners_list}>
        <img className={classes.partner_img} src={google} alt="Partner" />
        <img className={classes.partner_img} src={pwc} alt="Partner" />
        <img className={classes.partner_img_big} src={snp} alt="Partner" />
        <img className={classes.partner_img} src={telenor} alt="Partner" />
        <img className={classes.partner_img} src={sg} alt="Partner" />
        <img className={classes.partner_img} src={codepak} alt="Partner" />
        <img className={classes.partner_img_big} src={demo} alt="Partner" />
        <img className={classes.partner_img} src={womenintech} alt="Partner" />
        <img className={classes.partner_img} src={knct} alt="Partner" />
        <img className={classes.partner_img} src={nic} alt="Partner" />
        <img className={classes.partner_img} src={jazz} alt="Partner" />
        <img className={classes.partner_img} src={ministry} alt="Partner" />
        <img className={classes.partner_img} src={ignite} alt="Partner" />
        <img className={classes.partner_img_big} src={bentley} alt="Partner" />
      </div>
    </div>
  );
};

export default index;
