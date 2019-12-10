/** @jsx jsx */
import { jsx, ArrayInterpolation, SerializedStyles, css } from "@emotion/core";
import { UtilityProps } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";
import { ReactNode } from "react";
import {
  headingCSS,
  displayCSS,
  HeadingSize,
  DisplaySize
} from "../../common/CSS/Content";

interface Props extends UtilityProps {
  [x: string]: ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  display1?: boolean;
  display2?: boolean;
  display3?: boolean;
  display4?: boolean;
}

const Heading = (props: Props) => {
  let css: ArrayInterpolation<undefined> = [GetCSS(props)];

  return <div css={css.concat(UtilityResolver(props))}>{props.children}</div>;
};

export default Heading;

const GetCSS = (params: Props): SerializedStyles => {
  if (params.h1) return headingCSS({ headingSize: HeadingSize.h1 });
  if (params.h2) return headingCSS({ headingSize: HeadingSize.h2 });
  if (params.h3) return headingCSS({ headingSize: HeadingSize.h3 });
  if (params.h4) return headingCSS({ headingSize: HeadingSize.h4 });
  if (params.h5) return headingCSS({ headingSize: HeadingSize.h5 });
  if (params.h6) return headingCSS({ headingSize: HeadingSize.h6 });

  if (params.display1) return displayCSS({ displaySize: DisplaySize.d1 });
  if (params.display2) return displayCSS({ displaySize: DisplaySize.d2 });
  if (params.display3) return displayCSS({ displaySize: DisplaySize.d3 });
  if (params.display4) return displayCSS({ displaySize: DisplaySize.d4 });

  return css``;
};
