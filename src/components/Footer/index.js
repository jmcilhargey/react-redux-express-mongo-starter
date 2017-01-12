import React from "react";
import { Link } from "react-router";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Footer = () => (
  <div styleName="footer">
    <p>Sample template for larger apps using React, Redux, Node, Express, Mongoose</p>
  </div>
);

export default CSSModules(Footer, styles);
