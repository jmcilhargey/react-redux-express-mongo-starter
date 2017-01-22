import React from "react";
import styles from "./styles.css";

import A from "../A";

const NavLinks = () => (
  <div className={ styles.links }>
    <A to="/" name="Home" />
    <A to="/data" name="Data" />
    <A to="/analytics" name="Analytics" />
    <A to="/settings" name="Settings" />
  </div>
);

export default NavLinks
