import React from "react";
import Styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={Styles.Button}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
