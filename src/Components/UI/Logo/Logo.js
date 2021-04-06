import React from "react";
import Styles from "./logo.module.css";
import burgerLogo from "../../../Assets/images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={Styles.Logo}>
      <img src={burgerLogo} alt="burgerImage" />
    </div>
  );
};

export default Logo;
