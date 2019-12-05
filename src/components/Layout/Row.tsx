/** @jsx jsx */
import { jsx, ArrayInterpolation } from "@emotion/core";
import { rowCSS, UtilityProps } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";
import { ReactNode } from "react";

interface props extends UtilityProps {
  [x: string]: ReactNode;
}

const Row = (props: props) => {
  let css: ArrayInterpolation<undefined> = [rowCSS];

  return <div css={css.concat(UtilityResolver(props))}>{props.children}</div>;
};

export default Row;
