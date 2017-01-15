import React from "react";
import styles from "./styles.css";

import NavTitle from "./NavTitle";
import NavLinks from "./NavLinks";

const Header = () => (
  <div className={ styles.header }>
    <NavTitle />
    <NavLinks />
  </div>
);


export default Header;
