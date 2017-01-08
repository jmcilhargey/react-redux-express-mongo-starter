import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

const Card = ({ width, title, image, subTitle, text }) => (
  <div styleName="card" style={ { width: width } }>
    <div styleName="title">
      <h2>{ title }</h2>
    </div>
    <img styleName="media" src={ image }/>
    <div styleName="sub-title">
      <h3>{ subTitle }</h3>
    </div>
    <div styleName="text">
      <p>{ text }</p>
    </div>
  </div>
);

export default CSSModules(Card, styles);
