import React from "react";
import { Link } from "react-router";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Button = ({ onClick }) => (
  <button className={ styles.button } onClick={ onClick }>Button</button>
);

export default CSSModules(Button, styles);
