import React from "react";
import styles from "./styles.css";

const Cell = ({ content, size }) => (
  <div className={ `${ styles.cell } ${ styles[size] }` }>
    <p>{ content }</p>
  </div>
);

export default Cell;
