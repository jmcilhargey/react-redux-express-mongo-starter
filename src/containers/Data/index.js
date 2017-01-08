import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import Grid from "../../components/Grid";

class Data extends Component {
  render() {
    return (
      <div styleName="content container">
        <h1>Data</h1>
        <Grid />
      </div>
    );
  }
}

export default CSSModules(Data, styles, { allowMultiple: true });
