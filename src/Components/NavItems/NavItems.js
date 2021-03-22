import React, { Component } from "react";
import Styles from "./NavItems.module.css";

import Logo from "../UI/Logo/Logo";
import NavItem from "./NavItem/NavItem";
import HambMenu from "../UI/HambMenu/HambMenu";
import SideDrawer from "../UI/SideDrawer/SideDrawer";

import BackDrop from "../UI/BackDrop/BackDrop";

let doesShow = false;
class NavItems extends Component {
  state = {
    doesShow: false,
  };

  sideMenuShow = () => {
    doesShow = this.state.doesShow;

    this.setState((prevState, props) => {
      return {
        doesShow: !prevState.doesShow,
      };
    });
    console.log(doesShow);
    return doesShow;
  };

  render() {
    return (
      <header className={Styles.NavItems}>
        <div className={Styles.LeftSide}>
          <div className={Styles.MobileOnly}>
            <HambMenu clicked={this.sideMenuShow} />
          </div>
          {doesShow ? (
            <div>
              <SideDrawer clicked={this.sideMenuShow} />
              <BackDrop clicked={() => this.sideMenuShow} />
            </div>
          ) : null}
          <Logo />
        </div>
        <nav className={Styles.RightSide}>
          <NavItem>Menu</NavItem>
          <NavItem>Burger Builder</NavItem>
          <NavItem>Checkout</NavItem>
        </nav>
      </header>
    );
  }
}

export default NavItems;
