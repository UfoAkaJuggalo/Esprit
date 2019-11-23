/** @jsx jsx */
import { jsx, ArrayInterpolation } from "@emotion/core";
import { ReactNode } from "react";
import {
  containerFluidCSS,
  containerCSS,
  UtilityProps
} from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";

interface props extends UtilityProps {
  [x: string]: ReactNode;
  fluid?: boolean;
}

const Container = (props: props) => {
  let css: ArrayInterpolation<undefined>;

  if (props.fluid) css = [containerFluidCSS];
  else css = [containerCSS];

  return <div css={css.concat(UtilityResolver(props))}>{props.children}</div>;
};

export default Container;
