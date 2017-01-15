import React from "react";
import styles from "./styles.css";

import Wrapper from "./Wrapper";
import Cell from "./Cell";

const Grid = () => (
  <Wrapper>
    <Cell content="1/4 Width" size="size4"/>
    <Cell content="1/2 Width" size="size2"/>
    <Cell content="1/4 Width" size="size4"/>
    <Cell content="1/3 Width" size="size3"/>
    <Cell content="Auto Width" size="sizeAuto"/>
    <Cell content="1/2 Width" size="size2"/>
    <Cell content="Auto Width" size="sizeAuto"/>
    <Cell content="Auto Width" size="sizeAuto"/>
    <Cell content="Auto Width" size="sizeAuto"/>
  </Wrapper>
);

export default Grid;
