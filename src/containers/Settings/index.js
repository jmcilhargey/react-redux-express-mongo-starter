import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

class Settings extends Component {
  render() {
    return (
      <div styleName="content container">
        <h1>Settings</h1>
      </div>
    );
  }
}

export default CSSModules(Settings, styles, { allowMultiple: true });
