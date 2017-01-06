import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import NavTitle from "./NavTitle";
import NavLinks from "./NavLinks";

const Header = () => (
  <div styleName="header">
    <NavTitle />
    <NavLinks />
  </div>
);


export default CSSModules(Header, styles);
