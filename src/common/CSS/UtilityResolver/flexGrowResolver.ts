import { ArrayInterpolation } from "@emotion/core";

import { flexGrow0CSS, flexGrow1CSS } from "..";

export interface FlexGrowProps {
  flexGrow0?: boolean;
  flexGrow0Sm?: boolean;
  flexGrow0Md?: boolean;
  flexGrow0Lg?: boolean;
  flexGrow0Xl?: boolean;
  flexGrow1?: boolean;
  flexGrow1Sm?: boolean;
  flexGrow1Md?: boolean;
  flexGrow1Lg?: boolean;
  flexGrow1Xl?: boolean;
}

const FlexGrowResolver = (
  params: FlexGrowProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexGrow0) css.push(flexGrow0CSS({}));
  if (params.flexGrow0Sm) css.push(flexGrow0CSS({ mediaQuery: "xs" }));
  if (params.flexGrow0Md) css.push(flexGrow0CSS({ mediaQuery: "sm" }));
  if (params.flexGrow0Lg) css.push(flexGrow0CSS({ mediaQuery: "md" }));
  if (params.flexGrow0Xl) css.push(flexGrow0CSS({ mediaQuery: "lg" }));

  if (params.flexGrow1) css.push(flexGrow1CSS({}));
  if (params.flexGrow1Sm) css.push(flexGrow1CSS({ mediaQuery: "xs" }));
  if (params.flexGrow1Md) css.push(flexGrow1CSS({ mediaQuery: "sm" }));
  if (params.flexGrow1Lg) css.push(flexGrow1CSS({ mediaQuery: "md" }));
  if (params.flexGrow1Xl) css.push(flexGrow1CSS({ mediaQuery: "lg" }));

  return css;
};

export default FlexGrowResolver;
