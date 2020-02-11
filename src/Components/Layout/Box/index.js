import React from "react";
import classes from "./index.module.scss";
const box = props => {
  return (
    <div className={[classes.box, props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default box;
