import React, { PropTypes } from "react";
import styles from "./styles.css";

import Button from "../Button";

const Counter = ({ counter, onIncrement, onDecrement }) => (
  <div className={ styles.counter }>
    <p>Current count:</p>
    <h1>{ counter }</h1>
    <div className={ styles.btnGroup }>
      <Button text="Add" onClick={ onIncrement } />
      <Button text="Sub" onClick={ onDecrement } />
    </div>
  </div>
);

export default Counter;
