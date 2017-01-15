import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import Helmet from "react-helmet";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

class App extends Component {
  render() {
    return (
      <div className={ styles.main }>
        <Helmet
          title="React Redux Starter Kit"
          meta={[
            { property: "og:url", content: "" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: "React Redux Starter Kit" },
            { property: "og:site_name", content: "React Redux Starter Kit" },
            { property: "og:description", content: "A starter boilerplate for universal modular React apps that includes Redux, Express, Mongoose, Passport and local jwt hash-based auth" },
            { name: "description", content: "A starter boilerplate for universal modular React apps that includes Redux, Express, Mongoose, Passport and local jwt hash-based auth" }
          ]}
        />
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
