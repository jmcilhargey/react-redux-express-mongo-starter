import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Input = ({ type, label, name, placeholder, onChange }) => (
  <div>
    <label styleName="label">{ label }</label>
    <input
      styleName="input"
      type={ type }
      label={ label }
      name={ name}
      placeholder={ placeholder }
      onChange={ onChange }
    />
  </div>
);

export default CSSModules(Input, styles);
