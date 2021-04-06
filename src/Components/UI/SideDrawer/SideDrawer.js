import React from "react";
import Styles from "./SideDrawer.module.css";

import HambMenu from "../HambMenu/HambMenu";
import NavItem from "../../NavItems/NavItem/NavItem";
const SideDrawer = (props) => {
  return (
    <div className={Styles.SideDrawer}>
      {props.children}
      <HambMenu onClick={props.click} />
      <div className={Styles.Container}>
        <div />
        <NavItem>Menu</NavItem>
        <NavItem>Burger Builder</NavItem>
        <NavItem>Checkout</NavItem>
        <div />
      </div>
    </div>
  );
};

export default SideDrawer;
