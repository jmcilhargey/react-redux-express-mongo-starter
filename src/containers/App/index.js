import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

class App extends Component {
  render() {
    return (
      <div className={ styles.main }>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default CSSModules(App, styles);
