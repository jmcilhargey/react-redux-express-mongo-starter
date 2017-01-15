import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import Helmet from "react-helmet";

import Input from "../../components/Input";
import Button from "../../components/Button";

class Home extends Component {
  render() {
    return (
      <div className={ `${ styles.content } ${ styles.container }` }>
        <Helmet
          title="Analytics - React Redux Starter Kit"
          meta={[
            { property: "og:url", content: "" },
            { property: "og:title", content: "Home - React Redux Starter Kit" },
            { property: "og:description", content: "" },
            { name: "description", content: "" }
          ]}
        />
        <h1>Home</h1>
        <div className={ styles.form }>
          <Input type="text" label="Name" name="name" placeholder="Name"/>
          <Input type="email" label="Email" name="email" placeholder="Email"/>
          <Input type="password" label="Password" name="password" placeholder="Password"/>
          <Button text="Button" />
        </div>
      </div>
    );
  }
}

export default Home;
