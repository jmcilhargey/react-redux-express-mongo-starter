import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import Card from "../../components/Card";

const sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

class Analytics extends Component {
  render() {
    return (
      <div styleName="content container">
        <h1>Analytics</h1>
        <div styleName="row">
          <Card
            width="350px"
            title="Title 1"
            image="http://lorempixel.com/400/200"
            subTitle="Subtitle 1"
            text={ sampleText }
          />
          <Card
            width="350px"
            title="Title 2"
            image="http://lorempixel.com/400/200/sports"
            subTitle="Subtitle 2"
            text={ sampleText }
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(Analytics, styles, { allowMultiple: true });
