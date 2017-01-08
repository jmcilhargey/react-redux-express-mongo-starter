import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import Input from "../../components/Input";
import Button from "../../components/Button";

class Home extends Component {
  render() {
    return (
      <div styleName="content container">
        <h1>Home</h1>
        <div styleName="form">
          <Input type="text" label="Name" name="name" placeholder="Name"/>
          <Input type="email" label="Email" name="email" placeholder="Email"/>
          <Input type="password" label="Password" name="password" placeholder="Password"/>
          <Button />
        </div>
      </div>
    );
  }
}

export default CSSModules(Home, styles, { allowMultiple: true });
