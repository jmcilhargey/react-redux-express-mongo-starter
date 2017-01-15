import React from "react";
import styles from "./styles.css";
import { Link } from "react-router";

const A = ({ to, name }) => (
  <Link className={ styles.a } to={ to }>{ name }</Link>
);

export default A
