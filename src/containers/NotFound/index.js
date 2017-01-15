import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import styles from "./styles.css";

import A from "../../components/A"

class NotFound extends Component {
  render() {
    return (
      <div className={ `${ styles.content } ${ styles.container }` }>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <A to="/" name="Back to the home page" />
        </p>
      </div>
    );
  }
}

export default NotFound;
