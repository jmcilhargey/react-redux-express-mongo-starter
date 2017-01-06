import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import A from "../A";

const NavLinks = () => (
  <div styleName="links">
    <A to="home" name="Home" />
    <A to="data" name="Data" />
    <A to="analytics" name="Analytics" />
    <A to="settings" name="Settings" />
  </div>
);

export default CSSModules(NavLinks, styles)
