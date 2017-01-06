import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import Button from "../../components/Button";

class Home extends Component {
  render() {
    return (
      <div styleName="content container">
        <h1>Home view</h1>
        <Button />
      </div>
    );
  }
}

export default CSSModules(Home, styles, { allowMultiple: true });
