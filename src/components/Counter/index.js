import React, { PropTypes } from "react";
import styles from "./styles.css";

import Button from "../Button";

const Counter = ({ counter, onIncrement, onDecrement }) => (
  <div className={ styles.counter }>
    <p>Current count:</p>
    <h1>{ counter }</h1>
    <Button text="+" onClick={ onIncrement } />
    <Button text="-" onClick={ onDecrement } />
  </div>
);

export default Counter;
