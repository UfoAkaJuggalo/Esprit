import { ArrayInterpolation } from "@emotion/core";

import { flexFillCSS } from "..";

export interface FlexFillProps {
  flexFill?: boolean;
  flexFillSm?: boolean;
  flexFillMd?: boolean;
  flexFillLg?: boolean;
  flexFillXl?: boolean;
}

const FlexFillfResolver = (
  params: FlexFillProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexFill) css.push(flexFillCSS({}));
  if (params.flexFillSm) css.push(flexFillCSS({ mediaQuery: "xs" }));
  if (params.flexFillMd) css.push(flexFillCSS({ mediaQuery: "sm" }));
  if (params.flexFillLg) css.push(flexFillCSS({ mediaQuery: "md" }));
  if (params.flexFillXl) css.push(flexFillCSS({ mediaQuery: "lg" }));

  return css;
};

export default FlexFillfResolver;
