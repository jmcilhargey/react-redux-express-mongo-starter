import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Cell = ({ content, size }) => (
  <div styleName={ `cell ${ size }` }>
    <p>{ content }</p>
  </div>
);

export default CSSModules(Cell, styles, { allowMultiple: true });
