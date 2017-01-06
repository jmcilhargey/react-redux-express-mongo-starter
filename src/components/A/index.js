import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";
import { Link } from "react-router";

const A = ({ to, name }) => (
  <Link styleName="a" to={ to }>{ name }</Link>
);

export default CSSModules(A, styles);
