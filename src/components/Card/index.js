import React from "react";
import styles from "./styles.css";

const Card = ({ width, title, image, subTitle, text }) => (
  <div className={ styles.card } style={ { width: width } }>
    <div className={ styles.title }>
      <h2>{ title }</h2>
    </div>
    <img className={ styles.media } src={ image }/>
    <div className={ styles.subtitle }>
      <h3>{ subTitle }</h3>
    </div>
    <div className={ styles.text }>
      <p>{ text }</p>
    </div>
  </div>
);

export default Card;
