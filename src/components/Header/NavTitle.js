import React from "react";
import { Link } from "react-router";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const NavTitle = () => (
  <div>
    <h1 styleName="title">Sample Boilerplate</h1>
  </div>
);

export default CSSModules(NavTitle, styles)
