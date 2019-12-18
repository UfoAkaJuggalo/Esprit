/** @jsx jsx */
import { jsx, ArrayInterpolation, SerializedStyles, css } from "@emotion/core";
import { UtilityProps } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";
import { ReactNode } from "react";
import { blockquoteCSS } from "../../common/CSS/Content";

interface Props extends UtilityProps {
  [x: string]: ReactNode;
  source: ReactNode;
}

const Blockquote = (props: Props) => {
  let Css: ArrayInterpolation<undefined> = [blockquoteCSS];

  return (
    <blockquote css={Css.concat(UtilityResolver(props))}>
      {props.children}
      <footer>{props.source}</footer>
    </blockquote>
  );
};

export default Blockquote;
