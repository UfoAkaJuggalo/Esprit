import { ArrayInterpolation } from "@emotion/core";

import { flexNoWrapCSS, flexWrapCSS, flexWrapReverseCSS } from "..";

export interface FlexWrapProps {
  flexWrap?: boolean;
  flexWrapSm?: boolean;
  flexWrapMd?: boolean;
  flexWrapLg?: boolean;
  flexWrapXl?: boolean;
  flexNoWrap?: boolean;
  flexNoWrapSm?: boolean;
  flexNoWrapMd?: boolean;
  flexNoWrapLg?: boolean;
  flexNoWrapXl?: boolean;
  flexWrapReverse?: boolean;
  flexWrapReverseSm?: boolean;
  flexWrapReverseMd?: boolean;
  flexWrapReverseLg?: boolean;
  flexWrapReverseXl?: boolean;
}

const FlexWrapResolver = (
  params: FlexWrapProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexWrap) css.push(flexWrapCSS({}));
  if (params.flexWrapSm) css.push(flexWrapCSS({ mediaQuery: "xs" }));
  if (params.flexWrapMd) css.push(flexWrapCSS({ mediaQuery: "sm" }));
  if (params.flexWrapLg) css.push(flexWrapCSS({ mediaQuery: "md" }));
  if (params.flexWrapXl) css.push(flexWrapCSS({ mediaQuery: "lg" }));

  if (params.flexNoWrap) css.push(flexNoWrapCSS({}));
  if (params.flexNoWrapSm) css.push(flexNoWrapCSS({ mediaQuery: "xs" }));
  if (params.flexNoWrapMd) css.push(flexNoWrapCSS({ mediaQuery: "sm" }));
  if (params.flexNoWrapLg) css.push(flexNoWrapCSS({ mediaQuery: "md" }));
  if (params.flexNoWrapXl) css.push(flexNoWrapCSS({ mediaQuery: "lg" }));

  if (params.flexWrapReverse) css.push(flexWrapReverseCSS({}));
  if (params.flexWrapReverseSm)
    css.push(flexWrapReverseCSS({ mediaQuery: "xs" }));
  if (params.flexWrapReverseMd)
    css.push(flexWrapReverseCSS({ mediaQuery: "sm" }));
  if (params.flexWrapReverseLg)
    css.push(flexWrapReverseCSS({ mediaQuery: "md" }));
  if (params.flexWrapReverseXl)
    css.push(flexWrapReverseCSS({ mediaQuery: "lg" }));

  return css;
};

export default FlexWrapResolver;
