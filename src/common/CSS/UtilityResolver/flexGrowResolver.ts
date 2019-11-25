import { ArrayInterpolation } from "@emotion/core";
import {
  flexGrow0CSS,
  flexGrow0SmCSS,
  flexGrow0MdCSS,
  flexGrow0LgCSS,
  flexGrow0XlCSS,
  flexGrow1CSS,
  flexGrow1SmCSS,
  flexGrow1MdCSS,
  flexGrow1LgCSS,
  flexGrow1XlCSS
} from "..";

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

  if (params.flexGrow0) css.push(flexGrow0CSS);
  if (params.flexGrow0Sm) css.push(flexGrow0SmCSS);
  if (params.flexGrow0Md) css.push(flexGrow0MdCSS);
  if (params.flexGrow0Lg) css.push(flexGrow0LgCSS);
  if (params.flexGrow0Xl) css.push(flexGrow0XlCSS);

  if (params.flexGrow1) css.push(flexGrow1CSS);
  if (params.flexGrow1Sm) css.push(flexGrow1SmCSS);
  if (params.flexGrow1Md) css.push(flexGrow1MdCSS);
  if (params.flexGrow1Lg) css.push(flexGrow1LgCSS);
  if (params.flexGrow1Xl) css.push(flexGrow1XlCSS);

  return css;
};

export default FlexGrowResolver;
