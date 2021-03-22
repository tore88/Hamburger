import React from "react";
import Styles from "./Layout.module.css";
import Aux from "../hoc/Aux";
import NavItems from "../NavItems/NavItems";

const layout = (props) => {
  return (
    <Aux>
      <div className={Styles.layout}>
        <NavItems />
      </div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
