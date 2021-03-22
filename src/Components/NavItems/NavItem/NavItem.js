import React from "react";
import Styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div className={Styles.NavItem}>
      <a href="/">{props.children}</a>
    </div>
  );
};

export default NavItem;
