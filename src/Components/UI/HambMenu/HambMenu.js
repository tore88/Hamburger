import React from "react";
import Styles from "./HambMenu.module.css";

const HambMenu = (props) => {
  return (
    <div className={Styles.HamburgerMenu} onClick={props.clicked}>
      <div className={Styles.HambLine} />
      <div className={Styles.HambLine} />
      <div className={Styles.HambLine} />
    </div>
  );
};

export default HambMenu;
