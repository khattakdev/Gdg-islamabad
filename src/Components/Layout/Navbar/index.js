import React from "react";
import classes from "./index.module.scss";
import { NavLink } from "react-router-dom";
import Logo2x from "../../../assets/gdg_logo_img@2x.png";
import Logo from "../../../assets/gdg_logo_img.png";
import PropTypes from "prop-types";

const index = props => {
  const buttons = ["Home", "Shop"];
  return (
    <div className={classes.navBar}>
      <img className={classes.logo} src={Logo2x} />
      <div className={classes.buttons}>
        <NavLink
          className={classes.navLink}
          activeClassName={classes.navLink_active}
          exact
          to="/"
        >
          Home
        </NavLink>
        {/* <NavLink
          className={classes.navLink}
          activeClassName={classes.navLink_active}
          exact
          to="/shop"
        >
          Shop
        </NavLink> */}
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
