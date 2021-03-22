import React, { Component } from "react";
import Styles from "./NavItems.module.css";

import Logo from "../UI/Logo/Logo";
import NavItem from "./NavItem/NavItem";
import HambMenu from "../UI/HambMenu/HambMenu";
import SideDrawer from "../UI/SideDrawer/SideDrawer";

import BackDrop from "../UI/BackDrop/BackDrop";

// let doesShow = false;
let ifShow = null;
class NavItems extends Component {
  state = {
    doesShow: true,
  };

  sideMenuShow = () => {
    ifShow = this.state.doesShow;

    this.setState({ doesShow: !ifShow });
  };

  render() {
    return (
      <header className={Styles.NavItems}>
        <div className={Styles.LeftSide}>
          <div className={Styles.MobileOnly}>
            <HambMenu clicked={this.sideMenuShow} />
          </div>
          {ifShow ? (
            <div>
              <SideDrawer click={this.sideMenuShow} />
              <BackDrop click={this.sideMenuShow} />
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
