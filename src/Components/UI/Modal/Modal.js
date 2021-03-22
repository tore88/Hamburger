import React from "react";
import Styles from "./Modal.module.css";

const Modal = (props) => {
  return <div className={Styles.Modal}>{props.children}</div>;
};

export default Modal;
