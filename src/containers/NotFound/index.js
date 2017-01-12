import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import A from "../../components/A"

class NotFound extends Component {
  render() {
    return (
      <div styleName="content container">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <A to="/" name="Back to the home page" />
        </p>
      </div>
    );
  }
}

export default CSSModules(NotFound, styles, { allowMultiple: true });
