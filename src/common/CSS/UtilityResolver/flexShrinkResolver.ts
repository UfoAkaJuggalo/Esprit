import { ArrayInterpolation } from "@emotion/core";

import { flexShrink0CSS, flexShrink1CSS } from "..";

export interface FlexShrinkProps {
  flexShrink0?: boolean;
  flexShrink0Sm?: boolean;
  flexShrink0Md?: boolean;
  flexShrink0Lg?: boolean;
  flexShrink0Xl?: boolean;
  flexShrink1?: boolean;
  flexShrink1Sm?: boolean;
  flexShrink1Md?: boolean;
  flexShrink1Lg?: boolean;
  flexShrink1Xl?: boolean;
}

const FlexShrinkResolver = (
  params: FlexShrinkProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexShrink0) css.push(flexShrink0CSS({}));
  if (params.flexShrink0Sm) css.push(flexShrink0CSS({ mediaQuery: "xs" }));
  if (params.flexShrink0Md) css.push(flexShrink0CSS({ mediaQuery: "sm" }));
  if (params.flexShrink0Lg) css.push(flexShrink0CSS({ mediaQuery: "md" }));
  if (params.flexShrink0Xl) css.push(flexShrink0CSS({ mediaQuery: "lg" }));

  if (params.flexShrink1) css.push(flexShrink1CSS({}));
  if (params.flexShrink1Sm) css.push(flexShrink1CSS({ mediaQuery: "xs" }));
  if (params.flexShrink1Md) css.push(flexShrink1CSS({ mediaQuery: "sm" }));
  if (params.flexShrink1Lg) css.push(flexShrink1CSS({ mediaQuery: "md" }));
  if (params.flexShrink1Xl) css.push(flexShrink1CSS({ mediaQuery: "lg" }));

  return css;
};

export default FlexShrinkResolver;
