import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import Helmet from "react-helmet";

import Card from "../../components/Card";

const sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

class Analytics extends Component {
  render() {
    return (
      <div className={ `${ styles.content } ${ styles.container }` }>
        <Helmet
          title="Analytics - React Redux Starter Kit"
          meta={[
            { property: "og:url", content: "" },
            { property: "og:title", content: "Analytics - React Redux Starter Kit" },
            { property: "og:description", content: "" },
            { name: "description", content: "" }
          ]}
        />
        <h1>Analytics</h1>
        <div className={ styles.row }>
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

export default Analytics;
