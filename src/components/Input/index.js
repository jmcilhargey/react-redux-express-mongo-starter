import React from "react";
import styles from "./styles.css";

const Input = ({ type, label, name, placeholder, onChange }) => (
  <div>
    <label className={ styles.label }>{ label }</label>
    <input
      className={ styles.input }
      type={ type }
      label={ label }
      name={ name}
      placeholder={ placeholder }
      onChange={ onChange }
    />
  </div>
);

export default Input;
