import React from "react";
import Styles from "./BackDrop.module.css";

const backDrop = (props) => {
  return <div className={Styles.BackDrop} onClick={props.click}></div>;
};

export default backDrop;
