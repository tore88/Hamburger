import React from "react";
import Styles from "./SideDrawer.module.css";

import HambMenu from "../HambMenu/HambMenu";

const SideDrawer = (props) => {
  return (
    <div className={Styles.SideDrawer}>
      {props.children}
      <HambMenu onClick={props.click} />
    </div>
  );
};

export default SideDrawer;
