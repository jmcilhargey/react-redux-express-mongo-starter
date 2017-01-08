import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Button = ({ onClick }) => (
  <button styleName="button" onClick={ onClick }>Button</button>
);

export default CSSModules(Button, styles);
