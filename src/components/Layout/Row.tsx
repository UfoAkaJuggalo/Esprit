import React, { ReactNode } from "react";
/** @jsx jsx */
import { jsx, css, ArrayInterpolation } from "@emotion/core";
import { rowCSS, UtilityProps } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver";

interface props extends UtilityProps {
  [x: string]: ReactNode;
}

const Row = (props: props) => {
  let css: ArrayInterpolation<undefined> = [rowCSS];

  return <div css={css.concat(UtilityResolver(props))}>{props.children}</div>;
};

export default Row;
