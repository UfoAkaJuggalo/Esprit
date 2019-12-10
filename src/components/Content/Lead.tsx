/** @jsx jsx */
import { jsx, ArrayInterpolation, SerializedStyles, css } from "@emotion/core";
import { UtilityProps } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";
import { ReactNode } from "react";

interface Props extends UtilityProps {
  [x: string]: ReactNode;
}

const Lead = (props: Props) => {
  let Css: ArrayInterpolation<undefined> = [
    css`
      font-size: 1.25rem;
      font-weight: 200;
    `
  ];

  return <div css={Css.concat(UtilityResolver(props))}>{props.children}</div>;
};

export default Lead;
