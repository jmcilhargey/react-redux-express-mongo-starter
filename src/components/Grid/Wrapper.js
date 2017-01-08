import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Wrapper = ({ children }) => (
  <div styleName="wrapper">
    { children }
  </div>
);

export default CSSModules(Wrapper, styles);
