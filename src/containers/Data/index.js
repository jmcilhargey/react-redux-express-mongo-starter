import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import Helmet from "react-helmet";

import Grid from "../../components/Grid";

class Data extends Component {
  render() {
    return (
      <div className={ `${ styles.content } ${ styles.container }` }>
        <Helmet
          title="Analytics - React Redux Starter Kit"
          meta={[
            { property: "og:url", content: "" },
            { property: "og:title", content: "Data - React Redux Starter Kit" },
            { property: "og:description", content: "" },
            { name: "description", content: "" }
          ]}
        />
        <h1>Data</h1>
        <Grid />
      </div>
    );
  }
}

export default Data;
