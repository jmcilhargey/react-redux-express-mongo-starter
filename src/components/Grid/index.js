import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

import Wrapper from "./Wrapper";
import Cell from "./Cell";

const Grid = () => (
  <Wrapper>
    <Cell content="1/4 Width" size="size1-4"/>
    <Cell content="1/2 Width" size="size1-2"/>
    <Cell content="1/4 Width" size="size1-4"/>
    <Cell content="1/3 Width" size="size1-3"/>
    <Cell content="Auto Width" size="size-auto"/>
    <Cell content="1/2 Width" size="size1-2"/>
    <Cell content="Auto Width" size="size-auto"/>
    <Cell content="Auto Width" size="size-auto"/>
    <Cell content="Auto Width" size="size-auto"/>
  </Wrapper>
);

export default CSSModules(Grid, styles, { allowMultiple: true });
